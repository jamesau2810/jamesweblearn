import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Vishwas'
      }
    }
    componentDidMount(){
        setInterval(()=>{this.setState({
            name:'Vishwas'
        })},2000)
    }
  render() {
    console.log("Parent Comp render")
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}/>
        {/* <RegComp name = {this.state.name}></RegComp>
        <PureComp name = {this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp
