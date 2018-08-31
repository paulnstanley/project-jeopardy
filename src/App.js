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
    this.tableValues = [
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
    this.state = {
      hasData:false,
      columns: [
        {
          Header: 'Category 1',
          accessor: 'value',
          id: '1',
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
    // console.log('render columns fn sees: ', this);
    for (let i=0; i<6; i++) {
      columnArray.push(
        <Column addColumnData={this.addColumnData} key={i}/>
      )
    }
    // console.log(this.columnData)
    // const question = this.columnData[0].clues[0].question;
    // console.log(question)
    return columnArray;
  }


  addColumnData (object) {
    this.columnData.push(object)
    if (this.columnData.length === 6) {
      this.setState({columnData: this.columnData, hasData: true})
      const newState = this.state.columnData
      console.log(newState)
      this.updateColumnTitles(newState)
    }
  }

  updateColumnTitles = function (newState) {
    console.log(newState[0].clues[0].value)
    console.log(this.state.columnData[0].clues.value)

    const columnHeaders = [
      {

      Header: newState[0].category,
      // Cell: "400",
      accessor: 'value',
      Cell: '500',
      id: '1',
      headerStyle: {
        marginTop: '0px',
        height: '80px'
      },
      style: {
        marginTop: '10px',
        fontSize: '20px'
      }
    },
    {
      Header: newState[1].category,
      accessor: 'value',
      Cell: '500',
      style: {
        marginTop: '10px',
        fontSize: '20px'
      }
    },
    {
      Header: newState[2].category,
      accessor: 'value',
      Cell: '500',
      style: {
        marginTop: '10px',
        fontSize: '20px'
      }
    },
    {
      Header: newState[3].category,
      accessor: 'value',
      Cell: '500',
      style: {
        marginTop: '10px',
        fontSize: '20px'
      }
    },
    {
      Header: newState[4].category,
      accessor: 'value',
      Cell: '500',
      style: {
        marginTop: '10px',
        fontSize: '20px'
      }
    },
    {
      Header: newState[5].category,
      accessor: 'value',
      Cell: '500',
      style: {
        marginTop: '10px',
        fontSize: '20px'
      }
    }
  ]

  this.setState({columns: columnHeaders})
  }

  findQuestion (catTitle, rowIndex, state) {
    console.log('table state within findQuestion function: ', state)
    const foundQuestion = state.data
      .filter((category) => catTitle === category.category)[0].clues[rowIndex]
      // .filter((cell) => rowIndex === )
      alert(foundQuestion.question);
      alert(foundQuestion.answer);


      // .filter((cell) => rowIndex === state.clues)

    // let categories = ReactTable.props.columns
    // let questions = ReactTable.props.data
    // for
  }

  render() {
    const getTdProps = (state, rowInfo, column, instance) => {
      return {
        onClick: (e, handleOriginal) => {
            // console.log("A Td Element was clicked!");
            // console.log("it produced this event:", e);
            // console.log("It was in this column:", column);
            console.log('table state: ', state);

            const catTitle = column.Header;
            console.log('Column title is: ', catTitle);
            // console.log("It was in this row:", rowInfo);
            const rowIndex = rowInfo.index;
            console.log('Index is: ', rowIndex);

            this.findQuestion(catTitle, rowIndex, state);
            // markComplete(catTitle, rowIndex);
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
            <div className="col-md-1">
              <div className="score">
                Player 1 Score: threeve
              </div>
            </div>
            <div className="col-md-10" id="table">
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
                data={this.state.columnData}
                columns={this.state.columns}
                defaultPageSize = {5}
                sortable={false}
                resizable={false}
                showPagination={false}
                showPageSizeOptions={false}
                getTdProps={getTdProps}
              />
            </div>
            <div className="col-md-1">
            <div className="score">
              Player 2 Score: v
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
