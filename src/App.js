import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import Board from './components/Board.js';
import Column from './components/Column.js';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./index.css";

class App extends Component {
  constructor() {
    super()

    this.state = {}

  }

  render() {
    const getTdProps = (state, rowInfo, column, instance) => {
      return {
        onClick: (e, handleOriginal) => {
            console.log('You clicked: ', column.Header, rowInfo.original.value)
        }
      }
    }

      const data = [
    {
      value: '$200'
    }, {
      value: '$400'
    }, {
      value: '$600'
    }, {
      value: '$800'
    }, {
      value: '$1000'
    }
  ]
      const columns = [
      {
        Header: 'Category 1',
        accessor: 'value',
        style: {
          borderRadius: "5px",
          borderColor: "black"
        }
      },
      {
        Header: 'Category 2',
        accessor: 'value',
        style: {
          borderRadius: "5px",
          borderColor: "black"
        }
      },
      {
        Header: 'Category 3',
        accessor: 'value',
        style: {
          borderRadius: "5px",
          borderColor: "black"
        }
      },
      {
        Header: 'Category 4',
        accessor: 'value',
        style: {
          borderRadius: "5px",
          borderColor: "black"
        }
      },
      {
        Header: 'Category 5',
        accessor: 'value',
        style: {
          borderRadius: "5px",
          borderColor: "black"
        }
      },
      {
        Header: 'Category 6',
        accessor: 'value',
        style: {
          borderRadius: "5px",
          borderColor: "black"
        }
      }
    ]

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Jeopardy</h1>
        </header>
        <Column />
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="score">
                Player 1 Score: {}
              </div>
            </div>
            <div className="col-md-8" id="table">
              <ReactTable
                style={{
                  height:"500px",
                  textAlign:"center",
                  backgroundColor: "blue",
                  borderRadius: "5px",
                  borderColor: "#000000",
                  color: "yellow",
                  fontSize: "20",
                  verticalAlign: "middle"
                }}
                data={data}
                columns={columns}
                defaultPageSize = {5}
                sortable={false}
                showPagination={false}
                showPageSizeOptions={false}
                getTdProps={getTdProps}
              />
            </div>
            <div className="col-md-2">
              <button type="button" className="btn btn-primary">Restart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
