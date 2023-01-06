import React from 'react'


const ButtonInitial = ({ children, btnStyle, className, ...props } : any) => {
   return (
      <button {...props} className={`btn ${btnStyle} ${className || ''}`}>
         { children }
      </button>
   )
}

const ButtonPrimary = ({ children, className, ...props } : any) => {
   return (
      <ButtonInitial btnStyle="btn-primary" className={className} {...props}> {children} </ButtonInitial>
   )
}

const ButtonLightPrimary = ({ children, className, ...props } : any) => {
   return (
      <ButtonInitial btnStyle="btn-light-primary" className={className} {...props}> {children} </ButtonInitial>
   )
}

const ButtonOutlinePrimary = ({ children, className, ...props } : any) => {
   return (
      <ButtonInitial btnStyle="btn-outline-primary" className={className} {...props}> {children} </ButtonInitial>
   )
}

const ButtonSecondary = ({ children, className, ...props } : any) => {
   return (
      <ButtonInitial btnStyle="btn-secondary" className={className} {...props}> {children} </ButtonInitial>
   )
}

const ButtonLight = ({ children, className, ...props } : any) => {
   return (
      <ButtonInitial btnStyle="btn-outline-secondary" className={className} {...props}> {children} </ButtonInitial>
   )
}

const ButtonLightTextPrimary = ({ children, className, ...props } : any) => {
   return (
      <ButtonInitial 
            btnStyle="btn-light-text-primary" 
            className={className} {...props}> {children} </ButtonInitial>
   )
}

const ButtonIcon = ({ children, className, ...props } : any) => {
   return (
      <ButtonInitial btnStyle="btn-icon" className={className} {...props}> {children} </ButtonInitial>
   )
}

const ButtonClean = ({ children, className, ...props } : any) => {
   return (
      <ButtonInitial btnStyle="btn" className={className} {...props}> {children} </ButtonInitial>
   )
}


const Button = {
   Primary: ButtonPrimary,
   LightPrimary: ButtonLightPrimary,
   OutlinePrimary: ButtonOutlinePrimary,
   Secondary: ButtonSecondary,
   Light: ButtonLight,
   LightTextPrimary: ButtonLightTextPrimary,
   Icon: ButtonIcon,
   Clean: ButtonClean
}


export default Button