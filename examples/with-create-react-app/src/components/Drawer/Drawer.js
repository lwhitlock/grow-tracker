import React, { Component } from 'react';
import Drawer from 'react-md/lib/Drawers';

export default class App extends Component {
  render() {
    return(
      <Drawer
        position="right"
      >
        <div>Test</div>
      </Drawer>
    )
  }
}
