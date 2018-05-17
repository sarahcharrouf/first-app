import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi, my name is Sarah</h1>
        </header>
        <p className="App-intro">
          Building an app one step at a time.
        </p>
      </div>
    );
  }
}

<div>
        <button onClick={this.showMenu}>
          Show menu
        </button>

        {
          this.state.showMenu
            ? (
              <div className="menu">
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            
        }
      </div>

export default App;
