import React from 'react'

function CustomInput({InputStyle, type,name,placeholder}) {
    const InputStyle1 = "px-3 py-3  placeholder-primary-200  text-secondary-100 relative bg-primary-300 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
  return (
    <div >
        <input className={
InputStyle==="primary" ?InputStyle1 :null
        } 
        type={type} name={name} placeholder={placeholder}/>
  </div>)
}

export default CustomInput