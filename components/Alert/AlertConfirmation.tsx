import { type } from "os";
import Button from "../Button";
import Alert, { ErrorIcon, QuestionIcon, SuccessIcon, WarningIcon } from "./Alert";

interface typesParamAlert {
   icon: any,
   colorTitle: string,
   title?: string,
   bgAction: string,
   actionName: string,
   classActionName: string,
}

interface AlertInformationProps {
   types: typesParamAlert,
   children: React.ReactNode,
   closeAlert?: () => void;
   onProcess: () => void;
}

const AlertConfirmation = ({ types, children, closeAlert, onProcess}: AlertInformationProps) => {
      return (
         <Alert>
            <div className="alert-container">
               <div className="alert-content">
                  <div className="sm:flex sm:items-top">
                     {types.icon}
                     <div className="text-center sm:mt-0 sm:ml-4 sm:text-left break-words">
                        <p className={`my-1 sm:my-0 mt-2 text-lg font-inter-semibold ${types.colorTitle}`}> {types.title} </p>
                        <p className=""> {children} </p>
                     </div>
                  </div>
               </div>
               <div className={`bg-gradient-to-t ${types.bgAction} to-white dark:to-[#2A2A2A] alert-action`}>
                  <Button.Light onClick={closeAlert} className={`dark:bg-transparent bg-white hover:bg-gray-100 border-gray-200`}> Tutup </Button.Light>
                  <Button.Clean onClick={onProcess} className={types.classActionName}> {types.actionName} </Button.Clean>
               </div>
            </div>
         </Alert>
      )
}

interface TypeAlert {
   title?: string,
   actionName: string,
   children: React.ReactNode,
   closeAlert?: () => void;
   nextProcess: () => void;
}

const TypeWarning = ({ title, actionName, children, closeAlert, nextProcess} : TypeAlert ) => {

   
   const types:typesParamAlert = {
      icon: <WarningIcon/>,
      colorTitle: 'text-warning',
      title: title || 'Warning',
      bgAction: 'from-yellow-100 dark:from-[#4a2a0d]',
      actionName: actionName,
      classActionName: 'bg-yellow-500 dark:text-gray-300 border-yellow-500 text-white hover:bg-yellow-600 hover:border-yelow-600 dark:bg-yellow-700 dark:border-yellow-700 dark:hover:bg-yellow-800 dark:hover:border-yellow-800'
   }

   return (
      <AlertConfirmation types={types} closeAlert={closeAlert} onProcess={nextProcess}> {children} </AlertConfirmation>
   )
}

const TypeSuccess = ({ title, actionName, children, closeAlert, nextProcess} : TypeAlert) => {

    const types:typesParamAlert = {
      icon: <SuccessIcon/>,
      colorTitle: 'text-success',
      title:  title || 'Success',
      bgAction : "from-green-100 dark:from-[#0d3f21]",
      actionName: actionName,
      classActionName: 'bg-green-500 text-white dark:text-gray-300 border-green-500 hover:bg-green-600 hover:border-green-600 dark:bg-green-800 dark:border-green-800 dark:hover:bg-green-900 dark:hover:border-green-900'
   }

   return (
      <AlertConfirmation types={types} closeAlert={closeAlert} onProcess={nextProcess}> {children} </AlertConfirmation>
   )
}

const TypeError = ({ title, actionName, children, closeAlert, nextProcess} : TypeAlert) => {

   const types:typesParamAlert = {
      icon: <ErrorIcon/>,
      colorTitle: 'text-danger',
      title:  title || 'Error',
      bgAction : "from-red-100 dark:from-[#3c1616]",
      actionName: actionName,
      classActionName: 'bg-red-500 border-red-500 text-white dark:text-gray-300 hover:bg-red-600 hover:border-green-600 dark:bg-red-800 dark:border-red-800 dark:hover:bg-red-900 dark:hover:border-red-900'
   }

   return (
      <AlertConfirmation types={types} closeAlert={closeAlert} onProcess={nextProcess}> {children} </AlertConfirmation>
   )
}

const TypeQuestion = ({ title, actionName, children, closeAlert, nextProcess} : TypeAlert) => {

   const types:typesParamAlert = {
      icon: <QuestionIcon/>,
      colorTitle: 'text-indigo-500 dark:text-indigo-300',
      title:  title || 'Confirmation',
      bgAction : "from-indigo-100 dark:from-[#3a3a78]",
      actionName: actionName,
      classActionName: 'bg-indigo-500 border-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 text-white dark:text-gray-300 dark:bg-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-500 dark:hover:border-indigo-500'
   }

   return (
      <AlertConfirmation types={types} closeAlert={closeAlert} onProcess={nextProcess}> {children} </AlertConfirmation>
   )
}


AlertConfirmation.Warning = TypeWarning;
AlertConfirmation.Success = TypeSuccess;
AlertConfirmation.Error = TypeError;
AlertConfirmation.Question = TypeQuestion;

export default AlertConfirmation;