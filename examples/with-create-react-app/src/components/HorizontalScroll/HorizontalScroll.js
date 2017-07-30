import React, { Component } from 'react';
import './HorizontalScroll.css'

class HorizontalScroll extends Component {

  render() {
    return (
      <div className="HorizontalScroll">
        {this.props.children}
      </div>
    )
  }
}

export default HorizontalScroll
