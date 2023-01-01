import React from 'react'
import Card from '../../components/Card'
import Checkbox from '../../components/Forms/Checkbox'
import Radio from '../../components/Forms/Radio'

const CheckboxPage = () => {
  return (
    <div className='flex flex-row lg:flex-nowrap flex-wrap gap-4 w-full'>
    <Card>
      <Card.Body>
        <p className='text-base font-inter-semibold text-dark'> Checkbox </p>
        <Checkbox label="Laravel" id="laravel" className="mr-3"/>
        <Checkbox label="Laravel" id="laravel" disabled/>
        <p className="text-sm font-inter-semibold text-dark my-6">
            {" "}
            Props{" "}
          </p>
          <div className="bg-gray-50 my-5 p-5 rounded flex flex-col gap-2 dark:bg-dark-dept-2">
            <span>
              {" "}
              label&lt;string&gt; : label of checkbox (optional)
            </span>
            <span> ...props&lt;any&gt; : any props input (optional) </span>
          </div>

          <p className="text-sm font-inter-semibold text-dark my-6">
            How To Usage
          </p>
          <div className="bg-gray-50 my-5 p-5 rounded flex flex-col gap-2 dark:bg-dark-dept-2">
					<span> &lt;Checkbox label=&apos;Javascript&apos; /&gt; </span>
				</div>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <p className='text-base font-inter-semibold text-dark'> Radio </p>
        <Radio label="Indonesia" name="language" value="idn" className="mr-3"/>
        <Radio label="Inggris" name="language" value="inggris" className="mr-3"/>
        <Radio label="America" name="language" value="america" className="mr-3" disabled/>
        <p className="text-sm font-inter-semibold text-dark my-6">
            {" "}
            Props{" "}
          </p>
          <div className="bg-gray-50 my-5 p-5 rounded flex flex-col gap-2 dark:bg-dark-dept-2">
            <span>
              {" "}
              label&lt;string&gt; : label of checkbox (optional)
            </span>
            <span> ...props&lt;any&gt; : any props input (optional) </span>
          </div>

          <p className="text-sm font-inter-semibold text-dark my-6">
            How To Usage
          </p>
          <div className="bg-gray-50 my-5 p-5 rounded flex flex-col gap-2 dark:bg-dark-dept-2">
					<span> &lt;Radio label=&apos;Inggris&apos; /&gt; </span>
				</div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CheckboxPage