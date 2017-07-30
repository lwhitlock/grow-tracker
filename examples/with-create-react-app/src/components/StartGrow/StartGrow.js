import React, { Component } from 'react';
import styles from './StartGrow.css'

class StartGrow extends Component {

  render() {
    return (
      <Dialog
        id="new-grow"
        {...this.state}
        onHide={this._closeDialog}
        fullPage
        aria-label="New Event"
        visible = {this.state.visible}
      >
      <Toolbar
        colored
        nav={nav}
        actions={action}
        title="Add"
        fixed
      />
      <form className="md-toolbar-relative">
        <input type="text" ref={ el => this.inputEl = el }/>

        <ul>
          { /* Render the list of messages */
            this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
          }
        </ul>
      </form>
      </Dialog>
    )
  }
}

export default StartGrow
