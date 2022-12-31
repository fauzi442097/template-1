import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Button from '../../components/Button'
import AlertConfirmation from '../../components/layouts/Alert/AlertConfirmation'
import AlertInformation from '../../components/layouts/Alert/AlertInformation'

const AlertPage = () => {

  const [ showAlert, setShowAlert ] = useState({
      infoWarning: false,
      infoDanger: false,
      infoSuccess: false,
      confWarning: false,
      confDanger: false,
      confSuccess: false,
      confQuestion: false
  });

  const showAlertModal = (type: string) => {
      setShowAlert((prev) => ({...prev, [type]: true}));
  }
  
  const closeAlertModal = (type: string) => {
      setShowAlert((prev) => ({...prev, [type]: false}));
  }
  
  return (
      <>
   
            <div className='flex flex-grow flex-shrink-0'> 
               <div className='w-full lg:py-0 lg:px-[30px] m-auto container-fluid flex flex-row flex-wrap gap-4'> 

                     <div className='bg-white dark:bg-dark-dept-1 dark:border dark:border-[#2B2B40] py-5 px-9 rounded-xl flex-1'> 
                        <p className='text-base font-inter-semibold text-dark'> Alert Information </p>
                        <span className='mb-4 block'> This alert is used to provide information to the user. Contains 1 button for close the alert </span>
                        <div className='flex flex-raw flex-row gap-2'>
                           <Button.Primary onClick={() => showAlertModal('infoWarning')}>  Warning </Button.Primary>
                           <Button.Primary onClick={() => showAlertModal('infoSuccess')}>  Success </Button.Primary>
                           <Button.Primary onClick={() => showAlertModal('infoDanger')}>  Error </Button.Primary>
                        </div>
                        <AnimatePresence>
                           {showAlert.infoWarning && <AlertInformation.Warning closeAlert={() => closeAlertModal('infoWarning')}>Data yang dimasukkan sudah tersedia </AlertInformation.Warning>}
                           {showAlert.infoDanger && <AlertInformation.Error closeAlert={() => closeAlertModal('infoDanger')}> Terjadi kesalahan pada server </AlertInformation.Error>}
                           {showAlert.infoSuccess && <AlertInformation.Success closeAlert={() => closeAlertModal('infoSuccess')}> Data berhasil disimpan </AlertInformation.Success>}
                        </AnimatePresence>             

                        <p className='text-base font-inter-semibold text-dark my-4'> How to Usage </p>    
                        <div className='bg-gray-50 my-5 p-5 rounded flex flex-col gap-2'>
                           <span> &lt;AlertInformation.Warning&gt; Data yang dimasukkan sudah tersedia &lt;/AlertInformation.Primary&gt; </span>
                           <span> &lt;AlertInformation.Success&gt; Data berhasil disimpan &lt;/AlertInformation.Success&gt; </span>
                           <span> &lt;AlertInformation.Error&gt; Terjadi kesalahan pada server &lt;/AlertInformation.Error&gt; </span>
                        </div>
                        <p className='text-sm font-inter-semibold text-dark my-4'> Props </p>    
                        <div className='bg-gray-50 my-5 p-5 rounded flex flex-col gap-2'>
                           <span> closeAlert&lt;function&gt; : function that close alert (Optional)</span>
                           <span> title&lt;string&gt; : title name alert (Optional) </span>
                        </div>
                     </div>

                     <div className='bg-white dark:bg-dark-dept-1 dark:border dark:border-[#2B2B40] py-5 px-9 rounded-xl flex-1'> 
                        <p className='text-base font-inter-semibold text-dark'> Alert Confirmation </p>
                        <span className='mb-4 block'> This alert is used to confirm from user. Contains 2 button, first button for confirm from user and the second button for close the alert </span>
                        <div className='flex flex-raw flex-row gap-2'>
                           <Button.LightPrimary onClick={() => showAlertModal('confWarning')}>  Warning </Button.LightPrimary>
                           <Button.LightPrimary onClick={() => showAlertModal('confSuccess')}>  Success </Button.LightPrimary>
                           <Button.LightPrimary onClick={() => showAlertModal('confDanger')}>  Error </Button.LightPrimary>
                           <Button.LightPrimary onClick={() => showAlertModal('confQuestion')}>  Question </Button.LightPrimary>
                        </div>
                        <AnimatePresence>
                           {showAlert.confWarning && <AlertConfirmation.Warning title="Tes" closeAlert={() => closeAlertModal('confWarning')} nextProcess={() => alert('Data berhasil direject')} actionName="Reject">Apakah anda yakin akan reject data ini?</AlertConfirmation.Warning>}
                           {showAlert.confDanger && <AlertConfirmation.Error closeAlert={() => closeAlertModal('confDanger')} actionName="Hapus" nextProcess={() => alert('Data berhasil dihapus')}> Hapus data ini? </AlertConfirmation.Error>}
                           {showAlert.confSuccess && <AlertConfirmation.Success closeAlert={() => closeAlertModal('confSuccess')} actionName="Selanjutnya" nextProcess={() => alert('Next flow')}> Lanjutkan ke tahap selanjutnya? </AlertConfirmation.Success>}
                           {showAlert.confQuestion && <AlertConfirmation.Question closeAlert={() => closeAlertModal('confQuestion')} actionName="Batalkan" nextProcess={() => alert('berhasil dibatalkan')}> Batalkan proses pendaftaran peserta ini? </AlertConfirmation.Question>}
                        </AnimatePresence>             

                        <p className='text-base font-inter-semibold text-dark my-4'> How to Usage </p>    
                        <div className='bg-gray-50 my-5 p-5 rounded flex flex-col gap-2'>
                           <span> &lt;AlertConfirmation.Warning&gt; Data yang dimasukkan sudah tersedia &lt;/AlertConfirmation.Primary&gt; </span>
                           <span> &lt;AlertConfirmation.Success&gt; Data berhasil disimpan &lt;/AlertConfirmation.Success&gt; </span>
                           <span> &lt;AlertConfirmation.Error&gt; Terjadi kesalahan pada server &lt;/AlertConfirmation.Error&gt; </span>
                        </div>
                        <p className='text-sm font-inter-semibold text-dark my-4'> Props </p>    
                        <div className='bg-gray-50 my-5 p-5 rounded flex flex-col gap-2'>
                           <span> actionName&lt;string&gt; : action name of main process (Required) </span>
                           <span> nextProcess&lt;function&gt; : function that indicate main process of alert (Required)</span>
                           <span> closeAlert&lt;function&gt; : function that close alert (Optional)</span>
                           <span> title&lt;string&gt; : title name alert (Optional) </span>
                        </div>

                     </div>

               </div>
            </div>
         </>
  )
}

export default AlertPage