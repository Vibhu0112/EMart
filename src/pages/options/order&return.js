import React from 'react'
import Header from '../../components/header'
import { useSelector } from 'react-redux'


function order() {

    // const items = useSelector(selectItems);

    
  return (
    <div>
        <Header />
        <div className='flex grid-cols-5'>
        <main className=' sm:flex max-w-screen-2xl mx-auto'>
       
       {/*left */}
       
        <div className=' flex-grow ml-5 shadow-sm'>
             
             <div className=' flex flex-col p-5 space-y-10 bg-white'>
                <h1 className=' text-3xl border-b pb-4'>
                    {
                     "you've not ordered anything yet.."
                    
                    }
                    </h1>
                    </div></div>
                    </main>
        </div>
    </div>
  )
}

export default order