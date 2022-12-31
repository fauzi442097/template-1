import React from 'react'

const Content = ({ children } : {
  children: React.ReactNode
}) => {
  return (
    <div className='flex py-4 lg:py-[30px] px-0 flex-col flex-grow flex-shrink-0 container-fluid'>
      <div className="flex flex-grow flex-shrink-0">
        <div className="w-full lg:py-0 lg:px-[30px] m-auto container-fluid flex flex-row flex-wrap">
          { children }
        </div>
      </div>
    </div>
  )
}

export default Content