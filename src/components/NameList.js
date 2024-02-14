import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
    {
        id:1,
        name:"Dana",
        age:21,
        skill:"FINA"
    },{
        id:2,
        name:"Phoebe",
        age:21,
        skill:"Bio and Biz"
    },{
        id:3,
        name:"Clara",
        age:20,
        skill:"Android"
    }]
    const names = ["Dana","Phoebe","Clara"]
    // List : key = give unique<h#> (Reserved word: Inaccessible in Child)
    // const nameItem = persons.map(person => <Person key={person.id} person = {person}/>)
    const nameItem = names.map((name,index) => <h2 key={index} >{index} {name}</h2>)
  return (
    <div>
      {
        nameItem
      }
    </div>
  )
//   <h2>{names[0]}</h2>
//   <h2>{names[1]}</h2>
//   <h2>{names[2]}</h2>
}

export default NameList
