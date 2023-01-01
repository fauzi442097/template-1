import React from 'react'

const Textarea = ({ ...props} : any) => {
  return (
    <textarea {...props} className={`form-control w-full ${props.className || ''}`}></textarea>
  )
}

export default Textarea