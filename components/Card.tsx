import React from 'react';

interface childrenProps {
   children: React.ReactNode
   className?: string
}

const Card = ({ children, className } : childrenProps) => {

  return (
    <div className={`${className || 'bg-white shadow-sm dark:shadow-none dark:bg-dark-dept-1 rounded-xl transition-colors duration-300 relative break-words overflow-auto w-full flex flex-col flex-wrap'} `}>
      {children}
    </div>
  )
}

const CardHeader = ({ children, className } : childrenProps ) => {
   return (
      <div className={`${className || ''} px-8 min-h-[70px] flex flex-wrap justify-between items-center border-b dark:border-b-[#eff2f5]/10 border-b-[#eff2f5]`}>
         { children }
      </div>
   )
}

const CardBody = ({ children, className } : childrenProps ) => {
   return (
      <div className={`${className || ''} px-9 py-8 `}>
         { children }
      </div>
   )
}

const CardFooter = ({ children, className } : childrenProps ) => {
   return (
      <div className={`${className || ''} px-9 py-8 border-t dark:border-t-[#eff2f5]/10 border-b-[#eff2f5]`}>
         { children }
      </div>
   )
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card