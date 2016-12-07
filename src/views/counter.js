import React, { Component } from 'react';


export default  class Counter extends Component {

  render() {
    return (
      <span>
	    <button onClick={() => this.props.sub()}>-</button>
	    {this.props.count || 0}
	    <button onClick={() => this.props.add()}>+</button>
	  </span>
    )
  }
}

