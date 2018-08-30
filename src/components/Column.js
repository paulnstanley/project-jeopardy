import React, { Component } from 'react';
import axios from 'axios';

//choose a random category out of a maximum of 18418
const CAT_NUM = function () {
  return Math.floor(Math.random() * Math.floor(18418));
}

const URL = `http://jservice.io/api/category?id=`

class Column extends Component {
  constructor() {
    super()

    this.state = {
      category: '',
      clues: [
        {
          clue: '',
          value: 0,
          answer: '',
        }
      ]
    }

    this.getClues = this.getClues.bind(this);
    this.getClues();
  }

  getClues = function () {
    var self = this;
    const category = CAT_NUM();
    const clueUrl = URL + category;
    const request = axios.get(clueUrl)
      .then(function (response) {
        console.log('Response object: ', response)
        self.setState({
            category: response.data.title
        }
      );
    })
  }

  render () {
    return (
      <h3>{this.state.category}</h3>
    );
  }
}

export default Column


// import axios from "axios";
//
// const API_KEY = "f386691c0cd26a16742b12643c9b113e";
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//
// export const FETCH_WEATHER = "FETCH_WEATHER";
//
// export function fetchWeather(city) {
//   const url = `${ROOT_URL}&q=${city},us&units=imperial`;
//   const request = axios.get(url);
//
//   console.log('Request', request)
//
//   return {
//     type: FETCH_WEATHER,
//     payload: request
//   };
// }
