import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Checkbox = ({ label, className, ...props } : any) => {
  return (
      <label htmlFor={props.id} className={`pointer-events-none relative cursor-pointer select-none gap-1.5 items-center inline-flex ${className || ''}`}>
         <span className='h-5 w-5'>
            <input type="checkbox" className='form-check border rounded-md peer' {...props}/>
            <FaCheck className='font-inter-bold w-3 h-3 absolute text-red-500 dark:text-red-800 top-1 left-1 dark:text-opacity-0 text-opacity-0 transition check peer-checked:text-opacity-100'/>
         </span>
         <label htmlFor={props.id}> {label} </label>
      </label>
  )
}

export default Checkbox