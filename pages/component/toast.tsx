import React from 'react'
import Card from '../../components/Card'
import Toast from '../../components/Toast'

const ToastPage = () => {
  return (
    <Card>
      <Card.Header> 
         <h6 className='mb-0'> Toast </h6>
      </Card.Header>
      <Card.Body>
         <div className='flex flex-row gap-4'>
            <Toast.Success title='Berhasil'> Data berhasil disimpan </Toast.Success>
            <Toast.Warning> Username atau password salah </Toast.Warning>
            <Toast.Error> Terjadi kesalahan pada server </Toast.Error>
         </div>

         <p className="text-sm font-inter-semibold text-dark my-1">
            {" "}
            Props{" "}
         </p>
         <div className="bg-gray-50 my-5 p-5 rounded flex flex-col gap-2 dark:bg-dark-dept-2">
            <span>
               {" "}
               title&lt;string&gt; : Title toast (optional){" "}
            </span>
            <span> ...props&lt;any&gt; :Anything property</span>
         </div>

         <p className="text-base font-inter-semibold text-dark my-1">
            {" "}
            How To Usage{" "}
         </p>
         <div className="bg-gray-50 my-5 p-5 rounded flex flex-col gap-2 dark:bg-dark-dept-2">
            <code>
               &lt;Toast.Success title=&apos;Berhasil&apos;&gt; Data berhasil disimpan &lt;/Toast.Success&gt; <br/>
               &lt;Toast.Warning&gt; Username atau password salah &lt;/Toast.Warning&gt; <br/>
               &lt;Toast.Error&gt; Terjadi kesalahan pada server &lt;/Toast.Error&gt; <br/>
            </code>
         </div>
      </Card.Body>
    </Card>
  )
}

export default ToastPage