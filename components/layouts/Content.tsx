import React from 'react'

const Content = ({ children } : {
  children: React.ReactNode
}) => {
  return (
    <div className='flex py-[30px] px-0 flex-col flex-grow flex-shrink-0 container-fluid'>
      { children }
    </div>
  )
}

export default Content