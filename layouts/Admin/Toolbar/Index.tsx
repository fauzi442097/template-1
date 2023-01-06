import React from 'react'

const Toolbar = ({ children, className, ...props } : {
   children: React.ReactNode,
   className?: string,
   props?: any
}) => {
  return (
    <div className={`flex items-center w-full justify-between mb-4`} {...props}> 
      <div className={`flex flex-wrap w-full m-auto items-center justify-between container-fuild px-0 ${className || ''}`}>
         { children }
      </div>
    </div>
  )
}

export default Toolbar