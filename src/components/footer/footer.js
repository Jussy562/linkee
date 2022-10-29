import React from 'react'

function Footer() {
  return (
    <div className='w-full md:px-20 md:py-8 md:pb-4 px-6 py-4'>
        <hr />
        <div className='flex justify-between items-center'>
            <img src="/images/zuriInternship.png" alt='zuri internshinp' className='w-160 h-200' />
            <div className='flex'>
              <h3>HNG Internship 9 Frontend Task</h3>
            </div>
            <img src="/images/ingressive.png" alt='Ingressive for good' />
        </div>
    </div>
  )
}

export default Footer