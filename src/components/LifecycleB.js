import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Vishwas'
      }
      console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
        
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
  render() {
    console.log('LifecycleB render')
    return (
      <div>
        Lifecycle B
      </div>
    )
  }
}

export default LifecycleB