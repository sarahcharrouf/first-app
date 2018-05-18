import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.showMenu = this.showMenu.bind(this);
    this.state = {
      currentMenuItem : ''
    }
  }

  showMenu(event) {
    this.setState({
      currentMenuItem : event.target.value
    })
  }

  render() {

    var textToOutput = '';
    if(this.state.currentMenuItem==='running') {
      textToOutput = (
        <div>
          <h3>Hi Runner</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac metus non lectus finibus venenatis id ut ipsum. Donec a sapien tristique, interdum justo elementum, interdum purus. Pellentesque sed malesuada sapien, ac ultrices sapien. Aenean ligula quam, aliquam vel lacus sed, hendrerit ornare lectus. Aliquam erat volutpat. Praesent nec neque accumsan, sagittis magna a, imperdiet mi. Suspendisse augue nisi, consequat quis cursus et, dictum at ante.</p>
          <img src="http://lorempixel.com/400/200/" />
        </div>
      );
    }
    if(this.state.currentMenuItem==='yoga') {
      textToOutput = (
        <div>
          <h3>Hello Yogi!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac metus non lectus finibus venenatis id ut ipsum. Donec a sapien tristique, interdum justo elementum, interdum purus. Pellentesque sed malesuada sapien, ac ultrices sapien. Aenean ligula quam, aliquam vel lacus sed, hendrerit ornare lectus. Aliquam erat volutpat. Praesent nec neque accumsan, sagittis magna a, imperdiet mi. Suspendisse augue nisi, consequat quis cursus et, dictum at ante.</p>
          <img src="http://lorempixel.com/400/200/" />
        </div>
      );
    }
    if(this.state.currentMenuItem==='boxing') {
      textToOutput = (
        <div>
          <h3>Please dont hurt me!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac metus non lectus finibus venenatis id ut ipsum. Donec a sapien tristique, interdum justo elementum, interdum purus. Pellentesque sed malesuada sapien, ac ultrices sapien. Aenean ligula quam, aliquam vel lacus sed, hendrerit ornare lectus. Aliquam erat volutpat. Praesent nec neque accumsan, sagittis magna a, imperdiet mi. Suspendisse augue nisi, consequat quis cursus et, dictum at ante.</p>
          <img src="http://lorempixel.com/400/200" />
        </div>
      );
    }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi, my name is Sarah</h1>
        </header>
        <p className="App-intro">
          Building an app one step at a time.
        </p>
        {this.state.currentMenuItem}
        <select onChange={this.showMenu}>
          <option value="">(none selected)</option>
          <option value="running">Running</option>
          <option value="yoga">Yoga</option>
          <option value="boxing">Boxing</option>
        </select>
        {textToOutput}
      </div>
    );
  }
}


export default App;
