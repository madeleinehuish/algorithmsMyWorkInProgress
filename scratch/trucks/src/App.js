import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Trucks from './Trucks';
import { day, hour, timeCurrent, dayCurrent } from './time';
import _ from 'lodash';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTruckOn: false,
      trucks: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.getTrucks = this.getTrucks.bind(this);
  }

  getTrucks() {

    const baseUrl = 'https://data.sfgov.org/resource/bbb8-hzi6.json';
    const query = `${baseUrl}?dayorder=${day}`;

    const filtered = arr => {
    	const filterThis = arr.filter(elem => {
    		const start24 = Number(elem.start24.substr(0,2));
    		const end24 = Number(elem.end24.substr(0,2));

    		return start24 <= hour && hour < end24;
    	})
    	return filterThis;
    }

    const fetchTrucks = async () => {
  		const response = await axios.get(query);
  		const truckArray = await response.data;

  		//filter by current time
  		const truckFiltered = filtered(truckArray);

  		//sort list alphabetically with Lodash
  		const alphabetical = _.sortBy(truckFiltered, ['applicant']);

  		return alphabetical;

  	}

  	return fetchTrucks();
  }

  async handleClick() {
    this.setState({ isTruckOn: !this.state.isTruckOn });
    this.setState({ trucks: await this.getTrucks() })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="button" onClick={this.handleClick}></button>

        {this.state.isTruckOn ? <Trucks trucks={this.state.trucks} /> : <div>Push Button to show current trucks</div>}
      </div>
    );
  }
}

export default App;
