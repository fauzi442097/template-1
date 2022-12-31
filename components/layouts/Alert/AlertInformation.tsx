import Button from "../../Button";
import Alert, { ErrorIcon, SuccessIcon, WarningIcon } from "./Alert";

interface typesParamAlert {
   icon: any,
   colorTitle: string,
   title?: string,
   bgAction: string
}

interface AlertInformationProps {
   types: typesParamAlert,
   children: React.ReactNode,
   closeAlert?: () => void;
}

const AlertInformation = ({ types, children, closeAlert}: AlertInformationProps) => {
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
               </div>
            </div>
         </Alert>
      )
}

interface TypeAlert {
   title?: string,
   children: React.ReactNode,
   closeAlert?: () => void;
}

const TypeWarning = ({ title, children, closeAlert } : TypeAlert ) => {

   
   const types:typesParamAlert = {
      icon: <WarningIcon/>,
      colorTitle: 'text-warning',
      title: title || 'Warning',
      bgAction: 'from-yellow-100 dark:from-[#4a2a0d]'
   }

   return (
      <AlertInformation types={types} closeAlert={closeAlert}> {children} </AlertInformation>
   )
}

const TypeSuccess = ({ title, children, closeAlert} : TypeAlert) => {

    const types:typesParamAlert = {
      icon: <SuccessIcon/>,
      colorTitle: 'text-success',
      title:  title || 'Success',
      bgAction : "from-green-100 dark:from-[#0d3f21]"
   }

   return (
      <AlertInformation types={types} closeAlert={closeAlert}> {children} </AlertInformation>
   )
}

const TypeError = ({ title, children, closeAlert} : TypeAlert) => {

   const types:typesParamAlert = {
      icon: <ErrorIcon/>,
      colorTitle: 'text-danger',
      title:  title || 'Error',
      bgAction : "from-red-100 dark:from-[#3c1616]"
   }

   return (
      <AlertInformation types={types} closeAlert={closeAlert}> {children} </AlertInformation>
   )
}


AlertInformation.Warning = TypeWarning;
AlertInformation.Success = TypeSuccess;
AlertInformation.Error = TypeError;

export default AlertInformation;