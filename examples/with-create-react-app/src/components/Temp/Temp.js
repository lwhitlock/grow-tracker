import React, {Component} from 'react';
import './Temp.css'
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import FontIcon from 'react-md/lib/FontIcons';
import IconSeparator from 'react-md/lib/Helpers/IconSeparator';


import Drawer from 'react-md/lib/Drawers';
import Button from 'react-md/lib/Buttons/Button';
import Toolbar from 'react-md/lib/Toolbars';

class Temp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      position: 'left',
    };

    this._toggleLeft = this._toggleLeft.bind(this);
    this._toggleRight = this._toggleRight.bind(this);
    this._closeDrawer = this._closeDrawer.bind(this);
    this._handleToggle = this._handleToggle.bind(this);
  }

  _handleToggle(visible) {
    this.setState({ visible });
  }

  _closeDrawer() {
    this.setState({ visible: false });
  }

  _toggleLeft() {
    this.setState({ visible: !this.state.visible, position: 'left' });
  }

  _toggleRight() {
    console.log("toggle right");
    this.setState({ visible: !this.state.visible, position: 'right' });
  }

  render() {
    const left = this.state.position === 'left';
const close = <Button icon onClick={this._closeDrawer}>{left ? 'arrow_back' : 'arrow_back'}</Button>;
const header = (
  <Toolbar
    colored
    title={"Temperature"}
    nav={left ? null : close}
    actions={left ? close : null}
    className="md-divider-border md-divider-border--bottom"
  />
);

    return(
      <section className="card-wrapper">
      <Card
        className="gt-temp"
      >
        <CardTitle title="Temperature" />
        <IconSeparator label="Chart Goes Here" iconBefore>
          <FontIcon>timeline</FontIcon>
        </IconSeparator>
        <CardActions className="md-divider-border md-divider-border--top">
          <Button flat label="Details" secondary         onClick={() => {
                    this._toggleRight();
                  }}/>
        </CardActions>
      </Card>

      <Drawer
  {...this.state}
  onVisibilityToggle={this._handleToggle}
  type={Drawer.DrawerTypes.TEMPORARY}
  header={header}
  style={{ zIndex: 100 }}
/>
      </section>
    )
  }
}

export default Temp;
