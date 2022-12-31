import Head from 'next/head'
import Toolbar from '../../components/layouts/Toolbar/Index'
import PageTitle from '../../components/layouts/Toolbar/PageTitle'
import Button from '../../components/Button';
import { FiSave } from 'react-icons/fi'
import Breadcrumbs from '../../components/layouts/Toolbar/Breadcrumb';


export default function CompButton() {
  return (
    <>
      <div className='w-full flex flex-wrap gap-4'> 

          <div className='bg-white dark:bg-dark-dept-1 dark:border dark:border-[#2B2B40] py-5 px-9 rounded-xl flex-1'> 
            <p className='text-base font-inter-semibold text-dark'> Button Size </p>
            <div className='flex items-center gap-2'>
              <button className='btn btn-primary btn-sm'> 
                Simpan
              </button>
              <button className='btn btn-primary'> 
                Simpan
              </button>
              <button className='btn btn-primary btn-lg'> 
                Simpan
              </button>
              <button className='btn btn-primary btn-xl'> 
                Simpan
              </button>
            </div>
            <div className='flex flex-col gap-1 my-2'>
              <span> Small: 12px (btn-sm)</span>
              <span> Medium: 14px (btn-md)</span>
              <span> Large: 16px (btn-lg)</span>
              <span> XL: 18px (btn-xl)</span>
            </div>

            <p className='text-base font-inter-semibold text-dark my-4'> How to Usage </p>    
            <div className='flex flex-col'>
                <div className='flex items-center gap-2'>
                  <Button.Primary> Save </Button.Primary>
                  <Button.LightPrimary> Save </Button.LightPrimary>
                  <Button.OutlinePrimary> Save  </Button.OutlinePrimary>
                  <Button.Secondary> Save </Button.Secondary>
                  <Button.LightTextPrimary> Save </Button.LightTextPrimary>
                  <Button.Light> Save </Button.Light>
                  <Button.Icon className="btn-outline-primary"> <FiSave/> </Button.Icon>
                </div>
                <div className='bg-gray-50 my-5 p-5 rounded flex flex-col gap-2 dark:bg-dark-dept-2'>
                  <span> &lt;Button.Primary&gt; Save &lt;/Button.Primary&gt; </span>
                  <span> &lt;Button.LightPrimary&gt; Save &lt;/Button.LightPrimary&gt; </span>
                  <span> &lt;Button.OutlinePrimary&gt; Save &lt;/Button.OutlinePrimary&gt; </span>
                  <span> &lt;Button.Secondary&gt; Save &lt;/Button.Secondary&gt; </span>
                  <span> &lt;Button.LightTextPrimary&gt; Save &lt;/Button.LightTextPrimary&gt; </span>
                  <span> &lt;Button.Light&gt; Save &lt;/Button.Light&gt; </span>
                  <span> &lt;Button.Icon&gt; Save &lt;/Button.Icon&gt; </span>
                </div>
              </div>
          </div>

          <div className='bg-white dark:bg-dark-dept-1 dark:border dark:border-[#2B2B40] py-5 px-9 rounded-xl flex-1'> 
            <div>
              <p className='text-base font-inter-semibold text-dark'> Button Style </p>

              <div>
                <p className='text-sm font-inter-semibold text-dark my-4'> Button Primary </p>    
                <div className='flex items-center gap-2'>
                  <Button.Primary> Primary </Button.Primary>
                  <Button.LightPrimary> Light Primary </Button.LightPrimary>
                  <Button.OutlinePrimary> Outline Primary </Button.OutlinePrimary>
                </div>
              </div>

              <div className='my-4'>
                <p className='text-sm font-inter-semibold text-dark my-4'> Button Secondary </p>    
                <div className='flex items-center gap-2'>
                  <Button.Secondary> Secondary </Button.Secondary>
                  <Button.LightTextPrimary> Light Text Primary </Button.LightTextPrimary>
                </div>
              </div>

              <div className='my-4'>
                <span className='mb-1 block'> Button Light </span>
                <div className='flex items-center gap-2'>
                  <Button.Light> Light </Button.Light>
                </div>
              </div>

              <div>
                <p className='text-sm font-inter-semibold text-dark my-4'> Button Icon </p>    
                <div className='flex items-center gap-2'>
                  <Button.Icon className="btn-primary"> <FiSave/> </Button.Icon>
                  <Button.Icon className="btn-light-primary"> <FiSave/> </Button.Icon>
                  <Button.Icon className="btn-outline-primary"> <FiSave/> </Button.Icon>

                  <Button.Icon className="btn-secondary"> <FiSave/> </Button.Icon>
                  <Button.Icon className="btn-light-text-primary"> <FiSave/> </Button.Icon>
                  <Button.Icon className="btn-outline-secondary"> <FiSave/> </Button.Icon>               
                </div>
              </div>

              <div className='my-4'>
                <p className='text-sm font-inter-semibold text-dark my-4'> Button Disabled </p>    
                <div className='flex items-center gap-2'>
                  <Button.Primary disabled="disabled"> Primary </Button.Primary>
                  <Button.LightPrimary disabled="disabled"> Light Primary </Button.LightPrimary>
                  <Button.OutlinePrimary disabled="disabled"> Outline Primary </Button.OutlinePrimary>
                  <Button.Secondary disabled="disabled"> Secondary </Button.Secondary>
                  <Button.LightTextPrimary disabled="disabled"> Secondary </Button.LightTextPrimary>
                  <Button.Light disabled="disabled"> Light </Button.Light>
                </div>
              </div>
    
        
            </div>
          </div>

                    
        
      </div>    
    </>
  )
}
