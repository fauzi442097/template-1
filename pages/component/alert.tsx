import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import React, { useState } from 'react'
import { FiAlertTriangle } from 'react-icons/fi'
import Alert from '../../components/Alert'
import Button from '../../components/Button'
import Toolbar from '../../components/layouts/Toolbar/Index'
import PageTitle from '../../components/layouts/Toolbar/PageTitle'

const AlertPage = () => {

  const [ showAlert, setShowAlert ] = useState({
   infoWarning: false,
   infoDanger: false,
   infoSuccess: false
  });

  const showAlertModal = (type: string) => {
      setShowAlert((prev) => ({...prev, [type]: true}));
  }
  
  const closeAlertModal = (type: string) => {
   console.log('tes');
   setShowAlert((prev) => ({...prev, [type]: false}));
  }
  
  return (
      <>
         <Head>
         <title>Alert</title>
         <meta name="description" content="Generated by create next app" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/favicon.ico" />
         </Head>


         <Toolbar>
            <PageTitle> 
               <h1 className='page-title dark:text-slate-300'> Alert </h1>
            </PageTitle>
         </Toolbar>

            
            <div className='flex flex-grow flex-shrink-0'> 
               <div className='w-full lg:py-0 lg:px-[30px] m-auto container-fluid flex flex-row flex-wrap gap-4'> 

                     <div className='bg-white dark:bg-dark-dept-1 dark:border dark:border-[#2B2B40] py-5 px-9 rounded-xl flex-1'> 
                        <p className='text-base text-dark dark:text-slate-300'> Alert Information </p>
                        <div className='flex flex-raw flex-row gap-2'>
                           <Button.Primary onClick={() => showAlertModal('infoWarning')}> Type Warning </Button.Primary>
                           <Button.Primary onClick={() => showAlertModal('infoSuccess')}> Type Success </Button.Primary>
                           <Button.Primary onClick={() => showAlertModal('infoDanger')}> Type Error </Button.Primary>
                        </div>
                        <AnimatePresence>
                           {showAlert.infoWarning && <Alert.Information type='warning' message="Data yang dimasukkan sudah tersedia" closeAlert={() => closeAlertModal('infoWarning')}/>}
                           {showAlert.infoDanger && <Alert.Information type='error' message="Terjadi kesalahan pada server" closeAlert={() => closeAlertModal('infoDanger')}/>}
                           {showAlert.infoSuccess && <Alert.Information type='success' message="Data berhasil disimpan" closeAlert={() => closeAlertModal('infoSuccess')}/>}

                        </AnimatePresence>
                     </div>

                     <div className='bg-white dark:bg-dark-dept-1 dark:border dark:border-[#2B2B40] py-5 px-9 rounded-xl flex-1'> 
                        <p className='text-base text-dark dark:text-slate-300'> Alert Confirmation </p>

                        <input type="text" value="tes" className='bg-red-200' />
                     </div>

               </div>
            </div>
         </>
  )
}

export default AlertPage