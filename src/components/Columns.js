import React from 'react'

function Columns() {
    const items = [{id:1,title:"cvdsv"},{id:2,title:"cvvsdfvd"}]
  return (
    <React.Fragment>
        {
            items.map( item =>(
                <React.Fragment key = {item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }
      {/* <td>Name</td>
      <td></td> */}
    </React.Fragment>
  )
}

export default Columns
