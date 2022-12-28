import React, { Component } from 'react'

export default class Counter extends Component<any, any> {
  render() {
    return (
      <div>
      <p>Counter value - {this.props.counter}</p>
      <p>Age value - {this.props.age}</p>
      <div>
          <button onClick={() =>this.props.increment()}>Increment</button>
          <button onClick={() =>this.props.decrement()}>Decrement</button>
          <button onClick={() =>this.props.reset()}>Reset</button>

          <button onClick={() => this.props.updateAge(10)}>Update age</button>
      </div>
  </div>
    )
  }
}
