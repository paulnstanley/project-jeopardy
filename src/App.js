import React, { Component } from 'react';
import Board from './components/Board.js';
import Column from './components/Column.js';
import ReactTable from "react-table";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "react-table/react-table.css";
import "./index.css";

class App extends Component {
  constructor() {
    super()

    this.state = {}

    this.columnData = [];

    console.log(this.state);

    this.data = [
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

    this.columns = [
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
    this.addColumnData = this.addColumnData.bind(this);
    this.renderColumns = this.renderColumns.bind(this);

  }

 renderColumns () {
    let columnArray = [];
    console.log(this);
    for (let i=0; i<6; i++) {
      columnArray.push(
        <Column addColumnData={this.addColumnData} key={i}/>
      )
    }
    console.log(columnArray)

    return columnArray;
  }

  addColumnData (object) {
    this.columnData.push(object)
    console.log(this.columnData)
    console.log('question: ', this.columnData[0].clues[0].question)
    for (let i=0; i<6; i++) {
        console.log(this.columnData[0].clues[0].question);
        this.data.push({
          question: this.columnData[0].clues[0].question,
          // value: this.columnData[i].clues[j].value,
          // answer: this.columnData[i].clues[j].answer,
          // category: this.columnData[i].category
        });
      }
    console.log(this.data);
    }


  render() {
    const getTdProps = (state, rowInfo, column, instance) => {
      return {
        onClick: (e, handleOriginal) => {
            console.log('You clicked: ', column.Header, rowInfo.original.value)
        }
      }
    }


    return (
      <div className="App">
        <div>
          {this.renderColumns()},
        </div>
        <header className="App-header">
          <h1 className="App-title">Project (in) Jeopardy</h1>
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
                data={this.data}
                columns={this.columns}
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
