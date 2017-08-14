import React, { Component } from 'react';
import fire from '../../fire';

import Button from 'react-md/lib/Buttons/Button';
import Dialog from 'react-md/lib/Dialogs';
import Slider from 'react-md/lib/Sliders';

const today = new Date().toJSON();

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = { visible: false, temp: 78, humidity: 60, date: {today}};

    this._updateTemp = this._updateTemp.bind(this);
    this._updateHumidity = this._updateHumidity.bind(this);
  }



  _updateTemp(temp) {
    this.setState({ temp });
  }

  _updateHumidity(humidity) {
    this.setState({ humidity });
  }


  addDataPoint(e){
    console.log(this.state.date.today)
    fire.database().ref('grow/1/recordings').push({
      humidity: this.state.humidity,
      temperature: this.state.temp,
      date: this.state.date.today
    });
    this._closeDialog();
  }
  render() {


    return (
      <div>
      <Button
        id="add"
        floating
        secondary
        fixed
        onClick={this._openDialog}
      >add
      </Button>

      <Dialog
        id="recordings"
        {...this.state}
        title="Add Data"
        onHide={this._closeDialog}
        modal
        aria-label="New Event"
        visible={this.state.visible}
        actions={[{
  onClick: this._closeDialog,
  primary: true,
  label: 'Cancel',
}, {
  onClick: this.addDataPoint.bind(this),
  primary: true,
  label: 'Save',
}]}
      >
      <Slider
        id="temperature"
        label="Temperature"
        leftIcon={<span className="md-slider-ind">T</span>}
        defaultValue={this.state.temp}
        value={this.state.temp}
        onChange={this._updateTemp}
        max={110}
        editable
      />


      <Slider
        id="humidity"
        label="Humidity"
        leftIcon={<span className="md-slider-ind">R</span>}
        defaultValue={this.state.humidity}
        value={this.state.humidity}
        onChange={this._updateHumidity}
        max={100}
        editable
      />

      </Dialog>
    </div>
    )
  }
}

export default Add
