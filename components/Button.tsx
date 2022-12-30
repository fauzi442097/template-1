import React from 'react'


const ButtonInitial = ({ children, type, className, ...props } : any) => {
   return (
      <button {...props} className={`btn ${type} ${className || ''}`}>
         { children }
      </button>
   )
}

const ButtonPrimary = ({ children, className, ...props } : any) => {
   return (
      <ButtonInitial type="btn-primary" className={className} {...props}> {children} </ButtonInitial>
   )
}

const ButtonLightPrimary = ({ children, className, ...props } : any) => {
   return (
      <ButtonInitial type="btn-light-primary" className={className} {...props}> {children} </ButtonInitial>
   )
}

const ButtonOutlinePrimary = ({ children, className, ...props } : any) => {
   return (
      <ButtonInitial type="btn-outline-primary" className={className} {...props}> {children} </ButtonInitial>
   )
}

const ButtonSecondary = ({ children, className, ...props } : any) => {
   return (
      <ButtonInitial type="btn-secondary" className={className} {...props}> {children} </ButtonInitial>
   )
}

const ButtonLight = ({ children, className, ...props } : any) => {
   return (
      <ButtonInitial type="btn-outline-secondary" className={className} {...props}> {children} </ButtonInitial>
   )
}

const ButtonLightTextPrimary = ({ children, className, ...props } : any) => {
   return (
      <ButtonInitial 
            type="btn-light-text-primary" 
            className={className} {...props}> {children} </ButtonInitial>
   )
}

const ButtonIcon = ({ children, className, ...props } : any) => {
   return (
      <ButtonInitial type="btn-icon" className={className} {...props}> {children} </ButtonInitial>
   )
}


const Button = {
   Primary: ButtonPrimary,
   LightPrimary: ButtonLightPrimary,
   OutlinePrimary: ButtonOutlinePrimary,
   Secondary: ButtonSecondary,
   Light: ButtonLight,
   LightTextPrimary: ButtonLightTextPrimary,
   Icon: ButtonIcon
}


export default Button