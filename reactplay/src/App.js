import React, { Component } from 'react';
import logo from './logo.svg';
import Toggle from './Toggle';
import Trucks from './Trucks';
import _ from 'lodash';
import axios from 'axios';
import { day, hour, timeCurrent, dayCurrent } from './time';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: false,
      isTruckOn: false,
      trucks: []
    };

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
    this.setState({ isToggleOn: !this.state.isToggleOn });
    this.setState({ trucks: await this.getTrucks() }, () => {
      console.log(this.state.trucks);
    })
  }


  render() {
    return (
      <div className="App">
        <header className={'App-header'}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Madeleine's Redfin Homework App!</h1>
        </header>
        <br />
        <Toggle handleClick={this.handleClick} isToggleOn={this.state.isToggleOn}/>
        <br /><br />
        {this.state.isToggleOn ? <Trucks trucks={this.state.trucks}/> : <div>Press button above to generate list of trucks open in San Franciso currently.</div>}
        <br /><br />

      </div>
    );
  }
}

export default App;
