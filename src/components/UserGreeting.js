import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggin: false
      }
    }
    
  render() {
    // let message
    // if (this.state.isLoggin) {
    //     message = <div>Welcome Vishwas</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }
    // return (<div>{message}</div>)
    return (this.state.isLoggin?<div>Welcome Jason</div>:<div>Welcome Guest</div>)
    // if (this.state.isLoggin) {
    //     return (
    //         <div>
    //             <div>Welcome Vishwas</div>
    //         </div>
    
    //     )
    // } else {
    //     return (
    //         <div>
    //             <div>Welcome Guest</div>
    //         </div>
    
    //     )
        
    // }
    // return (
    //     <div>
    //         <div>Welcome Vishwas</div>
    //         <div>Welcome Guest</div>
    //     </div>

    // )
    
  }
}

export default UserGreeting
