import React,  {createContext, useState, useEffect, useRef} from 'react';

const defaultValues = {
   activeSidebar: false,
   setActiveSidebar: (isActive: any) => {},
}

export const GlobalContext = createContext(defaultValues);

export const GlobalContextProvider = ({children}: {
   children: React.ReactNode
}) => {
   const [ activeSidebar, setActiveSidebar ] = useState(false);

   return <GlobalContext.Provider
         value={{ 
            activeSidebar,
            setActiveSidebar
          }}>
            {children}
      </GlobalContext.Provider>
   
}