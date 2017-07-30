import React, {Component} from 'react';
import fire from '../../fire';
import Temp from '../Temp/Temp.js'

import Add from '../Add/Add.js'
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll.js'
import PlantPreview from '../PlantPreview/PlantPreview.js'

import Button from 'react-md/lib/Buttons/Button';
import Dialog from 'react-md/lib/Dialogs';
import Toolbar from 'react-md/lib/Toolbars';

class GrowHome extends Component {
  constructor(props) {
  super(props);

  this.state = { visible: false, pageX: null, pageY: null};
  this.state = { messages: [] };
}

state = {
  growId: 1,
  plants: []
}



componentWillMount(){
  /* Create reference to messages in Firebase Database */
  let messagesRef = fire.database().ref('grow/1/plants').orderByKey().limitToLast(100);
  messagesRef.on('child_added', snapshot => {
    /* Update React state when message is added at Firebase Database */
    let message = { text: snapshot.val(), id: snapshot.key };
    this.setState({ messages: [message].concat(this.state.messages) });
  })


}


  render() {

    return(
      <div>
        <Temp />

        <HorizontalScroll title={ "Plants" }>
          { /* Render the list of plants */
            this.state.messages.map( message => <PlantPreview key={message.id}{...message} /> )
          }
        </HorizontalScroll >

        <Add />
      </div>
    )
  }
}

export default GrowHome;
