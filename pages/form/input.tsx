import React, { useState } from 'react'
import Card from '../../components/Card'
import Input from '../../components/Forms/Input'
import "react-datepicker/dist/react-datepicker.css";
import InputGroup, { InputGroupText } from '../../components/Forms/InputGroup';

const InputPage = () => {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='flex flex-row gap-4 w-full flex-wrap lg:flex-nowrap'>
      <Card>
        <Card.Body>
          <p className='text-base font-inter-semibold text-dark'> Input Type </p>
          <div className='flex flex-wrap flex-row gap-4 items-center'>
            <span> Input Text</span>
            <Input.Text value="Ahmad Fauzi"/>
          </div>
          <div className='flex flex-wrap flex-row gap-4 items-center my-4'>
            <span> Input Number </span>
            <Input.Number value="12345" />
          </div>
          <div className='flex flex-wrap flex-row gap-4 items-center my-4'>
            <span> Input Password </span>
            <Input.Password value="12345678" />
          </div>
          <div className='flex flex-wrap flex-row gap-4 items-center my-4'>
            <span> Input File </span>
            <Input.File/>
          </div>

          <p className="text-sm font-inter-semibold text-dark my-6">
            {" "}
            Props{" "}
          </p>
          <div className="bg-gray-50 my-5 p-5 rounded flex flex-col gap-2 dark:bg-dark-dept-2">
            <span>
              {" "}
              className&lt;function&gt; : classname of input (optional)
            </span>
            <span> ...props&lt;any&gt; : any props input (optional) </span>
          </div>

          <p className="text-sm font-inter-semibold text-dark my-6">
            How To Usage
          </p>
          <div className="bg-gray-50 my-5 p-5 rounded flex flex-col gap-2 dark:bg-dark-dept-2">
					<span> &lt;Input.Text name=&apos;nama_depan&apos; /&gt; </span>
          <span> &lt;Input.Number name=&apos;number&apos; /&gt; </span>
          <span> &lt;Input.Password name=&apos;password&apos; /&gt; </span>
          <span> &lt;Input.File name=&apos;file&apos; /&gt; </span>
				</div>

         
          
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <h6 className='mb-0'> Input Style </h6>
        </Card.Header>
        <Card.Body>
          <div className='flex flex-col gap-4'>
            <Input.Text className="border-red-600 dark:border-red-800" placeholder="Focus"/>
            <Input.Text value="Disabled" disabled/>
            <Input.Text value="Readonly" readOnly/>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default InputPage