import React, {Component} from 'react';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import FontIcon from 'react-md/lib/FontIcons';
import IconSeparator from 'react-md/lib/Helpers/IconSeparator';


import Drawer from 'react-md/lib/Drawers';
import Button from 'react-md/lib/Buttons/Button';
import Toolbar from 'react-md/lib/Toolbars';

class PlantDetails extends Component {

  render() {

    return(
      <section className="card-wrapper">
      <Card>
        <CardTitle title={this.props.text.strain.name} />
        <CardActions className="md-divider-border md-divider-border--top">
          <Button flat secondary label="Leafly" secondary />
        </CardActions>
      </Card>
      </section>
    )
  }
}

export default PlantDetails;
