import React from 'react'

const Badge = ({children}:any) => {
  return (
    <>
      {children}
    </>
  )
}

const BadgeSuccess = ({className, children}:any) => {
   return (
      <span className={`text-green-500 bg-green-100 dark:bg-green-900 dark:text-green-200/70 inline-flex items-center py-1 px-2 rounded-md text-xs ${className || ''}`}> {children} </span>
   )
}

const BadgeDanger = ({className, children}:any) => {
   return (
      <span className={`text-red-500 bg-red-100 dark:bg-red-900 dark:text-red-200/70 inline-flex items-center py-1 px-2 rounded-md text-xs ${className || ''}`}> {children} </span>
      
   )
}

const BadgeWarning = ({className, children}:any) => {
   return (
      <span className={`text-yellow-500 bg-yellow-100  dark:bg-yellow-900 dark:text-yellow-200/70 inline-flex py-1 px-2 rounded-md text-xs ${className || ''}`}> {children} </span>
      
   )
}

const BadgeWhite = ({className, children}:any) => {
   return (
      <span className={`bg-white border border-[#eff2f5] dark:border-none dark:bg-dark-dept-2 inline-flex py-1 px-2 rounded-md text-xs ${className || ''}`}> {children} </span>
      
   )
}

const BadgeLight = ({className, type = 'primary', children}:any) => {
   let colorStyle = '';
   switch ( type ) {
      case 'primary' : colorStyle = 'text-green-500 dark:text-green-600'; break;
      case 'warning' : colorStyle = 'text-yellow-500 dark:text-yellow-600'; break;
      case 'danger' : colorStyle = 'text-red-500 dark:text-red-700'; break;
   }
   return (
      <span className={`bg-light dark:bg-dark-dept-2 ${colorStyle} inline-flex py-1 px-2 rounded-md text-xs ${className || ''}`}> {children} </span>
      
   )
}

Badge.Success = BadgeSuccess;
Badge.Danger = BadgeDanger;
Badge.Warning = BadgeWarning;
Badge.White = BadgeWhite;
Badge.Light = BadgeLight;

export default Badge