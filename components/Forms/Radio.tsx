import React from 'react'
import { GoPrimitiveDot } from "react-icons/go";


const Radio = ({ label, className, ...props } : any) => {
  return (
    <label htmlFor={props.id} className={`relative pointer-events-none select-none gap-1 items-start inline-flex ${className || ''}`}>
      <span className='h-6 w-6'>
         <input type="radio" className="form-check peer rounded-full" id={props.id} {...props}/>
         <GoPrimitiveDot className='absolute top-0 text-xl text-red-500 dark:text-red-800 text-opacity-0 dark:text-opacity-0 transition peer-checked:text-opacity-100 '/>
      </span>
      <label htmlFor={props.id}> {label} </label>
   </label>
  )
}

export default Radio