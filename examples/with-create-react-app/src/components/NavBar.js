import React, { PureComponent } from 'react';
import { ref, firebaseAuth } from '../fire';
import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons';



export default class NavBar extends PureComponent {

_signIn() {
  console.log("signing in")
  var provider = new firebaseAuth.GoogleAuthProvider();
  firebaseAuth().signInWithPopup(provider);
}
  render() {

    return (
        <Toolbar
          colored
          title='Grow'
          fixed
          actions={
            <Button key="account_circle" onClick={this._signIn}>account_circle</Button>
          }
        />
    );
  }
}
