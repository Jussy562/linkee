import React from 'react'

function ContactForm() {
    //px-8 pt-6 pb-8 mb-4
    //flex flex-col justify-center items-center
  return (
    <div className='flex md:justify-center items-center'>
        <form class="bg-white w-full md:w-2/3  rounded ">
                <div className='flex flex-col w-full '>
                    <h1 className='text-4xl font-bold text-gray-900 mb-6'>
                        Contact Me
                    </h1>
                    <p className='mb-6 text-xl md:text-2xl font-small text-gray-500'>Hi there, contact me to ask me about anything you have in mind.</p>
                </div>
                <div className='flex flex-col md:flex-row md:gap-4 w-full mb-6'>
                    <div class="w-full md:w-1/2">
                        <label class="block text-gray-800 text-lg font-inter mb-2" for="firstname">
                            First name
                        </label>
                        <input class=" appearance-none border rounded w-full py-2 px-3 text-xl text-gray-700  focus:outline-blue-200 focus:shadow-outline " id="firstname" type="text" placeholder="Enter your first name" />
                    </div>
                    <div class="w-full md:w-1/2">
                        <label class="block text-gray-800 text-lg font-inter mb-2" for="lastname">
                            Last name
                        </label>
                        <input class=" appearance-none border  rounded w-full py-2 px-3 text-xl text-gray-700 mb-3 focus:outline-blue-200 focus:shadow-outline" id="lastname" type="text" placeholder="Enter your last name" />
                        
                    </div>
                </div>

                
                <div className="w-full mb-6">
                    <label class="block text-gray-800 text-lg font-inter mb-2" for="email">
                            Email
                    </label>
                    <input class=" appearance-none border rounded w-full py-2 px-3 text-xl text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline" id="email" type="email" placeholder="yourname@email.com" />
                </div>

                

               
                <div class="w-full mb-6">
                    <label class="block text-gray-800 text-lg font-inter mb-2" for="message">
                        Message
                    </label>
                    <textarea rows={6} class="rounded-lg appearance-none border rounded w-full py-2 px-3 text-xl text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline" id="message" type="textarea" placeholder="Send me a message and I will respond as soon as possible..." />
                </div>
                

                <div class=" w-full md:flex md:items-center mb-6">
                    
                    <label class="w-full flex items-center text-gray-500 font-small">
                        <input className="border rounded-lg mr-2 w-6 h-6  hover:border hover:border-blue-200" type="checkbox" />
                        <span class="text-l md:text-xl">
                            You agree to providing your data to LeBeela Who may contact you.
                        </span>
                    </label>
                </div>
                
                <button class="w-full bg-blue-400 text-white text-lg font-bold py-4 text-center rounded-lg hover:bg-blue-300 focus:outline-none focus:shadow-outline" type="button">
                    Send a message
                </button>
                    
                
        </form>
    </div>
    

    
  )
}

export default ContactForm