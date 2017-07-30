import React, {Component} from 'react';
import './PlantPreview.css'

import PlantDetails from '../PlantDetails/PlantDetails.js'


import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Media, { MediaOverlay } from 'react-md/lib/Media';

import Drawer from 'react-md/lib/Drawers';
import Button from 'react-md/lib/Buttons/Button';
import Toolbar from 'react-md/lib/Toolbars';

class PlantPreview extends Component {
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
      title={this.props.text.strain.name}
      nav={left ? null : close}
      actions={left ? close : null}
      className="md-divider-border md-divider-border--bottom"
    />
  );

    return(
      <div>
      <Card
        className="gt-plant-preview"
        onClick={() => {
          this._toggleRight();
        }}
      >
        <Media>
          <img src="https://placeimg.com/160/160/any" alt={"Photo of " + (this.props.text.strain.name)}/>
          <MediaOverlay>
            <CardTitle title={this.props.text.strain.name} subtitle="Detail" />
          </MediaOverlay>
        </Media>

      </Card>

      <Drawer
      {...this.state}
      onVisibilityToggle={this._handleToggle}
      type={Drawer.DrawerTypes.TEMPORARY}
      header={header}
      style={{ zIndex: 100 }}
      >

      <PlantDetails {...this.props}/>

      </Drawer>
      </div>
    )
  }
}

export default PlantPreview;
