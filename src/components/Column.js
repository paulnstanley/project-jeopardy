import React, { Component } from 'react';
import axios from 'axios';

//choose a random category out of a maximum of 18418
const CAT_NUM = function () {
  return Math.floor(Math.random() * Math.floor(18418));
}

const URL = `http://jservice.io/api/category?id=`

class Column extends Component {
  constructor(props) {
    super()

    this.state = {
      category: '',
      clues: []
    }

    this.colRef = React.createRef();
  }

  getClues = function () {
    let self = this;

    const category = CAT_NUM();
    const clueUrl = URL + category;

    const request = axios.get(clueUrl)
      .then(function (response) {

        // console.log('Response object: ', response);

        //fetch the category title
        const categoryTitle = response.data.title;
        // console.log('title: ', categoryTitle);

        //get an array of all the clues for this category
        const clueArray = response.data.clues;
        // console.log('clueArray: ', clueArray);

        //grab the first five clues -- could be modified to grab a random five, but there are 18418 categories...
        const fiveClues = clueArray.slice(0, 5);
        // console.log('fiveClues: ', fiveClues);

        //set state to contain category, five clues
        self.setState({
          category: categoryTitle.toUpperCase(),
          clues: fiveClues
        })
        // console.log(self.props);

        if (self.props.hasOwnProperty('addColumnData')) {
          self.props.addColumnData(self.state);
        }

        //check the state
        // console.log(self);
    });
  }

  render () {
    if (this.state.clues.length === 0) {
      this.getClues();
      return (
        <div>Loading...</div>
      )
    }


    return (
        <div ref={this.colRef} />
    );
  }
}

export default Column


//old render testing
// (
//   <div>
//     <h1>{this.state.category}</h1>
//     <h1>{this.state.clues[0].question}</h1>
//   </div>
// );
// }
