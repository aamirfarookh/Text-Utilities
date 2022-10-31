import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    <div style={{height:"40px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
</div>}
</div>
  )
}

export default Alert
