import React from 'react'

const InputText = ({ className, ...props } : any) => {
  return (
    <input type={'text'} className={`form-control ${className || ''}`} {...props} />
  )
}

const InputPassword = ({ className, ...props } : any) => {
  return (
    <input type={'password'} className={`form-control ${className || ''}`} {...props} />
  )
}

const InputFile = ({ className, ...props } : any) => {
  return (
    <input type={'file'} className={`form-control-file ${className || ''}`} {...props} />
  )
}

const InputNumber = ({ className, ...props } : any) => {
  return (
    <input type={'number'} onWheel={(e:any) => e.target.blur()} className={`form-control ${className || ''}`} {...props} />
  )
}

const Input = {
  Text : InputText,
  Number : InputNumber,
  Password: InputPassword,
  File: InputFile
}

export default Input