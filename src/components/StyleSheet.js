import React from 'react'
import './myStyles.css'

function StyleSheet(props) {
  let className = props.primary ? 'primary':''
  let font = 'font-xl'
  return (
    <div>
      <h1 className={`${className} ${font}`}>StyleSheet</h1>
    </div>
  )
}

export default StyleSheet
