import React from 'react'

interface propsLabel {
   children: React.ReactNode,
   htmlFor?: string
   required?: boolean,
   optional?: boolean,
   className?: string
}

const Label = ({ children, htmlFor, required, optional, className } : propsLabel) => {
  return (
    <label htmlFor={htmlFor} className={`form-label block ${required && 'required'} ${optional && 'optional'} ${className || ''}`}> 
      <span className='text-sm'> {children} </span>
      {required && <span className='form-label-type text-primary'> * </span>}
      {optional && <span className='form-label-type text-gray-400 dark:text-gray-500'> (optional) </span>}
    </label>
  )
}

export default Label