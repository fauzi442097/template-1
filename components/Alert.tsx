import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Button from "./Button";

const SuccessIcon = () => {
   return (
       <div className="mx-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200 sm:mx-0">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
         </svg>
      </div>
   )
}

const WarningIcon = () => {
   return (
        <div className="mx-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md text-yellow-500 bg-yellow-100  dark:bg-yellow-800 dark:text-yellow-200 sm:mx-0">
            <svg
               aria-hidden='true'
               className='w-5 h-5'
               fill='currentColor'
               viewBox='0 0 20 20'
               xmlns='http://www.w3.org/2000/svg'
            >
               <path
                  fillRule='evenodd'
                  d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                  clipRule='evenodd'
               ></path>
            </svg>
            <span className='sr-only'>Success icon</span>
         </div>
   )
}

const ErrorIcon = () => {
   return (
        <div className="mx-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200 sm:mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
         </div>
   )
}

const QuestionIcon = () => {
   return (
        <div className="mx-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md text-slate-500 bg-slate-100 dark:bg-slate-500 dark:text-slate-200 sm:mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
         </div>
   )
}


interface AlertProps {
   children: React.ReactNode
}

const Alert = ({ children } : AlertProps) => {

   return (
      <>
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
                 default: { ease: "linear"},
                 duration: 3,
             }}
            className='fixed inset-0 bg-[#00000033] dark:bg-[#0b0e0aa6] transition-opacity backdrop-blur-sm z-50'>

            <motion.div
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               exit={{ scale: 0 }}
               transition={{ 
                  default: { ease: "linear"},
                  duration: 3
               }}
               className='fixed inset-0 z-[60] overflow-y-auto '
            >
               <div className='flex items-top justify-center text-center sm:min-h-full sm:items-center sm:p-0 '>
                  { children }
               </div>
            </motion.div>

         </motion.div>
      </>
   )
}

interface AlertInformationProps {
   type: string,
   message: any,
   title?: string,
   closeAlert?: () => void;
}

const AlertInformation = ({ type, title, message, closeAlert}: AlertInformationProps) => {

      let componentIcon:any;
      let colorTitle:string = "";
      let bgAction:string = "";
      switch ( type ) {
         case 'warning' : 
            componentIcon = <WarningIcon /> 
            title = title || 'Warning';
            colorTitle = "text-warning";
            bgAction = "from-yellow-100 dark:from-[#4a2a0d]"
         break;
         case 'success' : 
            componentIcon = <SuccessIcon /> 
            title = title || 'Success';
            colorTitle = "text-success";
            bgAction = "from-green-100 dark:from-[#0d3f21]"
         break;
         case 'error' : 
            componentIcon = <ErrorIcon /> 
            title = title || 'Error';
            colorTitle = "text-danger";
            bgAction = "from-red-100 dark:from-[#3c1616]"
         break;
      }

      return (
         <Alert>
            <div className="alert-container">
               <div className="alert-content">
                  <div className="sm:flex sm:items-top">
                     {componentIcon}
                     <div className="text-center sm:mt-0 sm:ml-4 sm:text-left break-words">
                        <p className={`sm:my-0 mt-2 text-lg font-semibold ${colorTitle}`}> {title} </p>
                        <p className=""> {message} </p>
                     </div>
                  </div>
               </div>
               <div className={`bg-gradient-to-t ${bgAction} to-white dark:to-[#2A2A2A] alert-action`}>
                  <Button.Light onClick={closeAlert} className={`dark:bg-transparent bg-white hover:bg-gray-100 border-gray-200`}> Tutup </Button.Light>
               </div>
            </div>
         </Alert>
      )
}

interface AlertConfirmationProps {
   type?: string,
   title?: string,
   message: any,
   actionName: string,
   closeAlert: () => void;
}

const AlertConfirmation = ({ type, title, message, actionName, closeAlert}: AlertConfirmationProps) => {

   let colorTitle:string = "";
   let componentIcon:any = "";
   switch ( type ) {
      case 'warning' : 
         componentIcon = <WarningIcon /> 
         title = title || 'Warning';
         colorTitle = "text-warning";
      break;
      case 'success' : 
         componentIcon = <SuccessIcon /> 
         title = title || 'Success';
         colorTitle = "text-success";
      break;
      case 'error' : 
         componentIcon = <ErrorIcon /> 
         title = title || 'Error';
         colorTitle = "text-danger";
      break;
      default:
         componentIcon = <QuestionIcon />
         title = title || 'Confirmation';
         colorTitle = "text-slate-500 dark:text-slate-300"
   }

   return (
      <Alert>
         <div className="alert-container">
            <div className="alert-content">
               <div className="sm:flex sm:items-top">
                  {componentIcon}
                  <div className="text-center sm:mt-0 sm:ml-4 sm:text-left break-words">
                     <p className={`sm:my-0 mt-2 text-warning text-lg font-semibold ${colorTitle}`}> {title} </p>
                     <p className=""> {message} </p>
                  </div>
               </div>
            </div>
            <div className="alert-action">
               <Button.Light onClick={closeAlert} className="bg-white dark:bg-transparent"> Tutup </Button.Light>
               <Button.Primary> {actionName} </Button.Primary>
            </div>
         </div>
      </Alert>
   )
}

Alert.Information = AlertInformation;
Alert.Confirmation = AlertConfirmation;

export default Alert