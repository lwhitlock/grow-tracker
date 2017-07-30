import React, { Component } from 'react';
import styles from './HorizontalScroll.css'

class HorizontalScroll extends Component {

  render() {
    return (
      <section>
      <h2>{this.props.title}</h2>
      <div className="HorizontalScroll">
        {this.props.children}
      </div>
      </section>
    )
  }
}

export default HorizontalScroll
