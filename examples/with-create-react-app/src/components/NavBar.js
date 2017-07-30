import React, { PureComponent } from 'react';

import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons';

const nav = <Button key="nav" icon>menu</Button>;

export default class NavBar extends PureComponent {

  render() {

    return (
        <Toolbar
          colored
          nav={nav}
          title='Grow'
          fixed
        />
    );
  }
}
