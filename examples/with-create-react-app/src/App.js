import React, { Component } from 'react';
import './App.css';
import { firebaseAuth } from './fire';
import { findDOMNode } from 'react-dom';

import NavBar from './components/NavBar'
import GrowHome from './components/GrowHome/GrowHome.js'

import CSSTransitionGroup from 'react-addons-css-transition-group';
import BottomNavigation from 'react-md/lib/BottomNavigations';

const links = [{
  label: 'Dashboard',
  iconChildren: 'dashboard',
}, {
  label: 'Plants',
  iconChildren: 'filter_vintage',
}, {
  label: 'Grows',
  iconChildren: 'filter_none',
}];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { page: 0, authed: false, loading: false };
    this._setPage = this._setPage.bind(this);
    this._setContainer = this._setContainer.bind(this);
  }

  _setPage(page) {
    if (this._container) {
      this._container.scrollTop = 0;
    }
    this.setState({ page });
  }

  _setContainer(phoneDemo) {
    this._container = findDOMNode(phoneDemo);
    if (this._container) {
      this.setState({ found: true });
    }
  }


  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          user: user
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })



  }
  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return (
      <div>
        <NavBar {...this.state}/>
        <main className="md-toolbar-relative">
          <h1>{this.state.authed ? this.state.user.displayName : "Not Logged in"}</h1>
          <BottomNavigation
            links={links}
            dynamic={false}
            onNavChange={this._setPage}
            renderNode={this._container}
          />
        </main>
      </div>

    );
  }
}

export default App;
