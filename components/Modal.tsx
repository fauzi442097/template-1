import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface modalProps {
   children: React.ReactNode,
   size?: string,
   position?: string,
   closeOutside?: boolean,
   setShowModal?: (value: any) => void
}

const getSizeModal = (size: string|undefined) => {
   if ( size == 'fullscreen') return 'modal-fullscreen';

   switch ( size ) {
      case 'sm': return 'w-modal-sm rounded-xl'; break;
      case 'lg': return 'w-modal-lg rounded-xl'; break;
      case 'xl': return 'w-modal-xl rounded-xl'; break;
      default:
         return 'w-modal-base rounded-xl';
   }
}

const Modal = ({ children, size, position, closeOutside = false, setShowModal } : modalProps) => {

  const modalSize = getSizeModal(size);
  const modalPosition = position == 'center' ? 'items-center' : 'items-start';
  const modalBackdropHeight = (size == 'fullscreen' || position == 'center') ? 'h-full' : 'my-32';

  const modalDialogRef = useRef(null);


  const closeModal = (e:any) => {
      console.log(closeOutside);
      if ( closeOutside && e.target.contains(modalDialogRef.current) && setShowModal ) setShowModal((prev:any) => !prev);
  }

  return (
      <>
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
                 default: { ease: "linear"},
                 duration: 1,
             }}
            className='fixed inset-0 bg-[#00000033] dark:bg-[#0b0e0aa6] transition-opacity backdrop-blur-sm z-50'>
          </motion.div>

           <div className='z-60 fixed inset-0 overflow-auto' onClick={closeModal}>
            <div className={`flex justify-center text-center ${modalBackdropHeight} ${modalPosition}`}>
               <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                     default: { ease: "linear"},
                     duration: 2,
                  }}
                  ref={modalDialogRef}
                  className={` bg-white ${modalSize} shadow-lg dark:bg-dark-dept-1 dark:shadow-none transform overflow-hidden text-left align-middle transition-all flex flex-col`}>
                  {children}
               </motion.div>
            </div>
         </div>
      </>
  )
}

interface childrenProps {
   children: React.ReactNode
}

const Header = ({ children } : childrenProps) => {
   return (
      <div className='flex justify-between p-7 border-b dark:border-b-[#eff2f5]/10 border-b-[#eff2f5] items-baseline'>
         { children }
      </div>
   )
}

const Body = ({ children } : childrenProps) => {
   return (
      <div className='p-7 flex-auto modal-body'>
         { children }
      </div>
   )
}

const Footer = ({ children } : childrenProps) => {
   return (
      <div className='modal-footer border-t p-7 dark:border-t-[#eff2f5]/10 border-t-[#eff2f5]'>
         { children }
      </div>
   )
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal