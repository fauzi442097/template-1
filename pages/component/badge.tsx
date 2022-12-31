import React from 'react'
import Badge from '../../components/Badge'
import Card from '../../components/Card'

const BadgePage = () => {
  return (
    <div className='flex gap-4 w-full flex-wrap lg:flex-nowrap'>
      <Card>
         <Card.Header> 
            <h6 className="mb-0"> Badge Style </h6>
         </Card.Header>
         <Card.Body>
            <div>
               <p className='text-sm font-inter-semibold text-dark mb-2'> Badge Primary </p>    
               <div className='flex items-center gap-2'>
                  <Badge.Success> Success </Badge.Success>
                  <Badge.Warning> Warning </Badge.Warning>
                  <Badge.Danger> Danger </Badge.Danger>
               </div>
            </div>

            <div>
               <p className='text-sm font-inter-semibold text-dark mb-2 mt-4'> Badge Light Primary </p>    
               <div className='flex items-center gap-2'>
                  <Badge.Light type="primary"> Light Success </Badge.Light>
                  <Badge.Light type="warning"> Light Warning </Badge.Light>
                  <Badge.Light type="danger"> Light Danger </Badge.Light>
               </div>
            </div>

            <div>
               <p className='text-sm font-inter-semibold text-dark mb-2 mt-4'> Badge White </p>    
               <div className='flex items-center gap-2'>
                  <Badge.White> White </Badge.White>
               </div>
            </div>
         </Card.Body>
      </Card>

      <Card>
         <Card.Header> 
            <h6 className="mb-0"> Badge Usage </h6>
         </Card.Header>
         <Card.Body>
            <p className="text-sm font-inter-semibold text-dark">
					{" "}
					Props{" "}
				</p>
				<div className="bg-gray-50 my-5 p-5 rounded flex flex-col gap-2 dark:bg-dark-dept-2">
					<span>
						{" "}
						className&lt;string&gt; : className of badge
						(Required){" "}
					</span>
					<span>
						{" "}
						type&lt;string&gt; : type badge for light badge (required)
					</span>
				</div>

				<p className="text-base font-inter-semibold text-dark my-4">
					{" "}
					How to Usage{" "}
				</p>
				<div className="bg-gray-50 my-5 p-5 rounded flex flex-col gap-2 dark:bg-dark-dept-2">
               <code>
                  <span className='block'>
                     &lt;Badge.Success&gt; Success &lt;/Badge.Success&gt;
                  </span>
                  <span className='block'>
                     &lt;Badge.Warning&gt; Warning &lt;/Badge.Warning&gt;
                  </span>
                  <span className='block'>
                     &lt;Badge.Danger&gt; Success &lt;/Badge.Danger&gt;
                  </span>
                  <span className='block'>
                     &lt;Badge.Light type=&apos;success&apos;&gt; Light Success &lt;/Badge.Light&gt;
                  </span>
                  <span className='block'>
                     &lt;Badge.Light type=&apos;warning&apos;&gt; Light Warning &lt;/Badge.Light&gt;
                  </span>
                  <span className='block'>
                     &lt;Badge.Light type=&apos;danger&apos;&gt; Light Danger &lt;/Badge.Light&gt;
                  </span>
                  <span className='block'>
                     &lt;Badge.White&gt; White &lt;/Badge.Light&gt;
                  </span>
               </code>
				</div>
         </Card.Body>
      </Card>  
    </div>
    
  )
}

export default BadgePage