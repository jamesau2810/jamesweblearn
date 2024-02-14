import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  // three ways props » ({vdsv,vdsv}) . » const {fwv,dsvw} = this.props
  increment(){
    this.setState(prevState =>({
        count:prevState.count+ 1
    }))
    // console.log(this.state.count)
  }
  incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  render() {
    return (
    <div>
      <div>Count - {this.state.count}</div>
      <button onClick={()=> this.incrementFive()}>Increment</button>
    </div>
    )
  }
}

export default Counter

