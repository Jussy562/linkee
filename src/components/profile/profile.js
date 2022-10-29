import React from 'react'

function Profile() {
  return (
    
    <nav class="bg-none border-none px-2 sm:px-4 py-6 md:py-2.5 rounded dark:bg-gray-900">
    <div class=" flex items-center mb-6 ">
        <div className='flex flex-col md:flex-row w-full bg-none justify-center items-center'>
            <div className='flex justify-center w-full bg-white'>
                <div className='flex flex-col justify-between items-center'>
                    <img src='/images/profile-pic.png' className=' mb-6 md:h-20 md:w-22 h-20 w-20 rounded-full' alt='Profile' />
                    <h3 className='text-3xl text-black-900 bold'>Le Beela</h3>
                </div>
            </div>
            <div className='hidden md:block items-end w-auto bg-grey-500' id='navbar-default'>
                <div className='flex flex-col justify-start items-center w-full'>
                    <img src='/images/share.png' className=' h-20 sm:h-9' alt='Profile' />
                    
                </div>
            </div>
        </div>
        
        
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        {/* <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        
        </div> */}
    </div>
    </nav>

  )
}

export default Profile