import React from 'react'
import Card from '../../components/Card'
import Input from '../../components/Forms/Input'
import InputGroup, { InputGroupText } from '../../components/Forms/InputGroup'

const InputGroupPage = () => {
  return (
    <Card>
      <Card.Body>
          <div className='flex flex-wrap flex-row gap-4 items-center'>  
            <span> Input Group Left </span>
            <InputGroup>
              <InputGroupText position='left'> Rp </InputGroupText>
              <Input.Text id="name" placeholder="70.000" className="input-group-left"/>
            </InputGroup>
          </div>
          
           <div className='flex flex-wrap flex-row gap-4 items-center my-4'>  
            <span> Input Group Right </span>
            <InputGroup>
              <Input.Text id="name" placeholder="70.000" className="input-group-right"/>
              <InputGroupText position='right'> Rp </InputGroupText>
            </InputGroup>
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
              &lt;InputGroup&gt; <br></br>
                &nbsp; &lt;InputGroupText position=&apos;left&apos;&gt; Rp &lt;/InputGroupText&gt;<br></br>
               &nbsp; &lt;Input.Text id=&apos;name&apos; placeholder=&apos;70.000&apos; className=&apos;input-group-left&apos;&gt; <br></br>
               &lt;/InputGroup&gt;

              <br></br><br></br>
                &lt;InputGroup&gt; <br></br>
               &nbsp; &lt;Input.Text id=&apos;name&apos; placeholder=&apos;70.000&apos; className=&apos;input-group-right&apos;&gt; <br></br>
               &nbsp; &lt;InputGroupText position=&apos;right&apos;&gt; Rp &lt;/InputGroupText&gt;<br></br>
               &lt;/InputGroup&gt;
            </code>
				  </div>
      </Card.Body>
    </Card>
  )
}

export default InputGroupPage