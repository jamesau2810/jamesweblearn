import React, { Component } from 'react'
import withCounter from './withCounter'
export class HoverCounter extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         count:0
    //     }
    // }
    // incrementCount = () =>{
    //     this.setState(prevState =>{
    //         return {count:prevState.count + 1}
    //     })
    // }
  render() {
    // const {count} = this.state
    const {count,incrementCount,name} = this.props
    // return <h2 onMouseOver={this.incrementCount}>
    //     {this.props.name} Hovered {count} times
    //     </h2>
    return <h2 onMouseOver={incrementCount}>
        {name} Hovered {count} times
    </h2>
    // return (
    //   <div>
    //   </div>
    // )
  }
}

export default withCounter(HoverCounter,20)
