import React, { PureComponent } from 'react';
import { db } from '../fire';

import { login, logout} from '../helpers/auth'
import { pickGrow } from '../helpers/globals'

import Avatar from 'react-md/lib/Avatars';
import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons';
import ListItem from 'react-md/lib/Lists/ListItem';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import SelectField from 'react-md/lib/SelectFields';


export default class NavBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      growList: [],
      activeGrow: "-KrNdRV8aiRMh0LYJ9gl",
    }
  };



  componentWillMount(){

    let growRef = db.ref('grows').orderByKey().limitToLast(100);
    growRef.on('child_added', snapshot => {
      let grow = {key: snapshot.key, name:snapshot.val().name  };
      this.setState({growList: [grow].concat(this.state.growList)});
    })
  };

  render() {
    const titleMenu = (
      <SelectField
        key="titleMenu"
        id="titles"
        menuItems={this.state.growList}
        defaultValue={this.state.activeGrow}
        onChange={pickGrow}
        itemLabel="name"
        itemValue="key"
      />
    );

    return (
      <Toolbar
        colored
        titleMenu={titleMenu}
        actions={this.props.authed ?
          <MenuButton id="woop" buttonChildren={
            <Avatar src={this.props.user.photoURL}
            role="presentation"
            />
          }>
            <ListItem  onClick={logout} primaryText="Logout" />
            <ListItem primaryText="Help" />
          </MenuButton> :
          <Button key="account_circle" icon onClick={login}>account_circle</Button>
        }
      />
    );
  }
}
