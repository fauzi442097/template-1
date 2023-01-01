import React from 'react'
import Card from '../../components/Card'
import Textarea from '../../components/Forms/Textarea'

const TextAreaPage = () => {
  return (
    <Card>
      <Card.Body>
         <div className='flex flex-row gap-4 w-full md:flex-nowrap flex-wrap'>
          <Textarea> Enable </Textarea>
          <Textarea disabled> Disabled </Textarea>
          <Textarea readOnly> Readonly </Textarea>
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
               <code>
                  &nbsp; &lt;Textarea&gt; Enabled &lt;/Textarea&gt;<br></br>
                  &nbsp; &lt;Textarea disabled&gt; Disabled &lt;/Textarea&gt;<br></br>
                  &nbsp; &lt;Textarea readOnly&gt; Readonly &lt;/Textarea&gt;<br></br>
               </code>
				</div>
      </Card.Body>
    </Card>
  )
}

export default TextAreaPage