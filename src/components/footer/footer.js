import React from 'react'

function Footer() {
  return (
    <div className='w-full md:px-20 md:py-8 md:pb-4 px-6 py-4'>
        <hr />
        <div className='flex flex-col gap-2 md:gap-8 md:flex-row md:justify-between md:items-center py-10'>
            <img src="/images/zuri.Internship_Logo.png" alt='zuri internshinp' className='w-20 sm:h-auto' />
            <div className='flex'>
              <h3 className='font-inter text-gray-300'>HNG Internship 9 Frontend Task</h3>
            </div>
            <img src="/images/I4G.png" alt='Ingressive for good' className='w-20 h-auto' />
        </div>
    </div>
  )
}

export default Footer