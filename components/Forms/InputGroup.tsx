import React from 'react'

export const InputGroupText = ({ position = 'left', className, children } : {
   position: string,
   children: React.ReactNode,
   className?: string
}) => {
   const positionStyle = position == 'left' ? 'rounded-tl-lg rounded-bl-lg border-l' : 'rounded-tr-lg rounded-br-lg border-r'
   return (
      <span className={` bg-slate-100 dark:bg-slate-600 dark:border-slate-600 transition-colors duration-300 py-2 px-4 text-sm border-t border-b ${positionStyle} ${className || ''}`}> {children} </span>
   )
}

{/* <InputGroup className='mt-5'>
   <InputGroupText position='left'> Rp </InputGroupText>
   <Input id="name" placeholder="70.000" className="input-group-left"/>
</InputGroup> */}

const InputGroup = ({ children, className } : {
   children: React.ReactNode,
   className?: string
}) => {
  return (
      <div className={`relative flex items-center flex-wrap ${className || ''}`}>
         { children }
      </div>
  )
}

export default InputGroup