import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "Parent"
      }
      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName){
        // Things prop up upside
        alert("Hello " + this.state.parentName + " From "+ childName)
        // alert(`Hello ${this.state.parentName}`)
    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
