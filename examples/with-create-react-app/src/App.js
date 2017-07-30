import React, { Component } from 'react';

import './App.css';

import NavBar from './components/NavBar'
import GrowHome from './components/GrowHome/GrowHome.js'



class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <main className="md-toolbar-relative">
          <GrowHome />
        </main>
      </div>

    );
  }
}

export default App;
