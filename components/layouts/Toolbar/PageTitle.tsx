import React from 'react'

const PageTitle = ({ children } : {
   children : React.ReactNode
}) => {
  return (
      <div className='py-2 mr-5 flex flex-col'> 
         {children}
      </div>
  )
}

export default PageTitle