import React from 'react'

function Profile() {
  return (
    
    <nav class="flex  mb-6 bg-none border-none py-6  rounded">
    {/* <div class=" flex items-center mb-6 "> */}
        <div className='flex flex-col md:flex-row w-full justify-center'>
            <div className='flex flex-col   md:flex-row w-full md:w-96  items-center justify-center   bg-none'>
                <div className='flex flex-col justify-between items-center'>
                    <img src='/images/profile-pic.png' className=' profile_image mb-6 md:h-20 md:w-22 h-20 w-20 rounded-full' alt='Profile' id='profile_image' />
                    <h3 className='text-3xl text-gray-700 font-medium font-inter mb-2' id='twitter'>Le Beela</h3>
                    <h3 className='text-3xl text-gray-700 font-medium font-inter hidden'>Baribor Paago</h3>
                </div>
                
            </div>
            
            <div className='hidden w-full md:w-auto  bg-none     md:block  ' id='navbar-default'>
                    <div className='w-full flex justify-center items-start'>
                        <div className='  border border-dashed border-gray-300 bg-none rounded-full w-12 h-auto   flex  justify-center items-center w-full'>
                            <img src='/images/share.png' className=' w-4 sm:h-9' alt='share_button' />
                            
                        </div>
                    </div>
            </div>
        
            
           
        </div>
        
        <div className=' flex items-start'>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm border border-dashed rounded-full md:hidden bg-none hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <img src='/images/menu2.png'alt='menu' className='w-4 h-4' />
            
            </button>
        </div>
       
    {/* </div> */}
    </nav>

  )
}

export default Profile