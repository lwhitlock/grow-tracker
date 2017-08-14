import React, {Component} from 'react';
import './Temp.css'
import { Chart } from 'react-google-charts';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import Drawer from 'react-md/lib/Drawers';
import Button from 'react-md/lib/Buttons/Button';
import Toolbar from 'react-md/lib/Toolbars';

class Temp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      position: 'left',
      datatest: ['Date', 'Humidity', 'Temperature'],
      options: {
        legend: 'none',
        curveType: 'function',
        series: {
          0: {
            color:  '388e3c'
          }
        }
      },
      data: [
        ['Year', 'Temperature', 'Humidity'],
        ['06',  86,      50],
        ['09',  86,      71],
        ['14',  79,       21],
        ['16',  82,      16],
        ['17',  79,      16],
      ]
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

  componentWillMount(){
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
        <Chart
          chartType="ComboChart"
          data={this.state.data}
          options={this.state.options}
          graph_id="temp-chart"
          width="100%"
          height="30vh"

        />
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
