import React from 'react'

const PageAction = ({ children } : {
   children : React.ReactNode
}) => {
  return (
    <div className='flex items-center py-2'>
      { children }
    </div>
  )
}

export default PageAction