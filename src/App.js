import React, { Component } from 'react';
import Column from './components/Column.js';
import ReactTable from "react-table";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "react-table/react-table.css";
import "./index.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      hasData:false,
      columns: [
        {
          Header: 'Category 1',
          accessor: 'value',
          headerStyle: {
            marginTop: '0px',
            height: '75px'
          },
          style: {
            borderRadius: "5px",
            borderColor: "black"
          }
        },
        {
          Header: 'Category 2',
          accessor: 'value',
        },
        {
          Header: 'Category 3',
          accessor: 'value',
        },
        {
          Header: 'Category 4',
          accessor: 'value',
        },
        {
          Header: 'Category 5',
          accessor: 'value',
          },
        {
          Header: 'Category 6',
          accessor: 'value',
          }
      ]
    };

    this.columnData = [];

    this.addColumnData = this.addColumnData.bind(this);
    this.renderColumns = this.renderColumns.bind(this);
    this.updateColumnTitles = this.updateColumnTitles.bind(this);

  }
//Create each column with dollar amounts

  renderColumns () {
    let columnArray = [];
    console.log('render columns fn sees: ', this);
    for (let i=0; i<6; i++) {
      columnArray.push(
        <Column addColumnData={this.addColumnData} key={i}/>
      )
    }
    console.log(this.columnData)
    // const question = this.columnData[0].clues[0].question;
    // console.log(question)
    return columnArray;
  }


  addColumnData (object) {
    this.columnData.push(object)
    if (this.columnData.length === 6) {
      this.setState({columnData: this.columnData, hasData: true})
      const stateTest = this.state.columnData
      this.updateColumnTitles(stateTest)
    }
  }

  updateColumnTitles = function (stateTest) {
    console.log(stateTest)
    console.log(this.state.columns)

    const columnHeaders = [{
      Header: stateTest[0].category,
      accessor: 'value',
      headerStyle: {
        marginTop: '0px',
        height: '75px'
      },
      style: {
        borderRadius: "5px",
        borderColor: "black"
      }
    },
    {
      Header: stateTest[1].category,
      accessor: 'value'
    },
    {
      Header: stateTest[2].category,
      accessor: 'value'
    },
    {
      Header: stateTest[3].category,
      accessor: 'value'
    },
    {
      Header: stateTest[4].category,
      accessor: 'value'
    },
    {
      Header: stateTest[5].category,
      accessor: 'value'
    }
  ]

    this.setState({columns: columnHeaders})

    // this.setState(prevState => ({
    //   columns: {
    //     ...prevState.columns,
    //     column: ''
    //   }
    // }))

    console.log(this.state.columns)
    }

  render() {
    const getTdProps = (state, rowInfo, column, instance) => {
      return {
        onClick: (e, handleOriginal) => {
            console.log('You clicked: ', column.Header, rowInfo.original.value)
        }
      }
    }

    if(!this.state.hasData) {
      return (
        <div>
          {this.renderColumns()}
        </div>
      )
    }

    return (
      <div className="App">
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
                  backgroundColor: "#060CE9",
                  borderRadius: "5px",
                  borderColor: "#000000",
                  color: "#FFCC00",
                  fontSize: "20",
                  verticalAlign: "middle",
                }}
                data={this.state.columnData[0].clues}
                columns={this.state.columns}
                defaultPageSize = {5}
                sortable={false}
                resizable={false}
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
