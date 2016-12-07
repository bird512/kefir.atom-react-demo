import React, { Component } from 'react';


export default  class Remove extends Component {

  render() {
    return (
      <button onClick={() => this.props.remove()}>x</button>
    )
  }
}

