import React from "react"
const Hello = () => {
    // return (
    //     // <div className = 'dummyClass'>
    //     //     <h1>Hello </h1>
    //     // </div>

    // )
    return React.createElement('div',{id:"hello",className : "dummies"},React.createElement('h1',null,"Hello Samuel Edward"))
}
export default Hello