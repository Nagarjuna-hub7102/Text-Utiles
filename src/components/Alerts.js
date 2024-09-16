import React from 'react'

export default function Alerts(props) {
  function capatilize(word){
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);

  }
  return (
   props.alert && <div>
        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>({capatilize(props.alert.type)})</strong> {props.alert.message}
        </div>
    </div>
  )
}
