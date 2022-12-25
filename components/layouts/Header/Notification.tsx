import React from 'react'
import { useClickOutside } from './Topbar';
import { motion } from "framer-motion"

const Notification = ({ setShowDropdownTopbar, btnRef, className, ...props } : any) => {

  let notificationRef = useClickOutside(() => {
        setShowDropdownTopbar((prev:any) => ({ ...prev, notification: false}));
  }, btnRef);

  return (
    <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ 
            default: { ease: "linear"},
            duration: 3
          }}
         ref={notificationRef} 
         className={`bg-white dark:bg-dark-depth-2 w-80 overflow-hidden absolute rounded-lg top-14 right-0 md:top-20 md:right-0 shadow-lg dark:shadow-none flex flex-col z-20 ${className || ''} transition duration-300 ease-in-out`} {...props}>
      <div className='px-3 py-6 bg-primary text-white dark:text-slate-300 dark:bg-primary-dark'> 
         <div className='flex items-center gap-4 px-3'> 
            <p className='text-lg font-inter-semibold'> Notification </p>
         </div>
      </div>
      <div className='p-6 max-h-80 overflow-y-auto'>
         Content
      </div>
      <div className="px-3 text-center py-4 text-sm border-t dark:border-t-color-border-dark border-t-color-border-light">
         Lihat semua
      </div>
   </motion.div>
  )
}

export default Notification