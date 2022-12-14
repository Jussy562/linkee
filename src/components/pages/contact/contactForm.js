import React, {useState, useEffect} from 'react';

function ContactForm() {
    const initialValues = {
        firstname: " ", 
        lastname: " ",
        email: " ",
        message: " ",
        
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
    const checkError = 'Accept before you continue';

    const handleChange = (e) => {
        
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        
    };

    const handleCheck = (e) => {
        if (e.target.checked) {
            setIsChecked(current => !current);
        }
    }

   

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        if (isChecked) {
            setIsCheck(true);
        };
        setIsSubmit(true);
        
    };

    useEffect(
        ()=>{
            console.log(formErrors);
            if(Object.keys(formErrors).length === 0 && isSubmit){
                console.log(formErrors);
            }
        }, [formErrors, isSubmit] 
        ); 

    const validate = (values) => {
        const errors = {};
        const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (values.firstname < 1){
            errors.firstname = "Firstname is required!";
        }

        if (values.lastname < 1){
            errors.lastname = "Lastname is required!";

        }

        if(values.email < 1) {
            errors.email = "Email is required!";
        }
         else if (!regex.test(values.email)){
            errors.email = "Enter a Valid email!";
        }

        if (values.message < 1) {
            errors.message ="Please enter a message!"
        }

      

        return errors;

    };

    //px-8 pt-6 pb-8 mb-4
    //flex flex-col justify-center items-center
  return (
    <div className='flex md:justify-center items-center'>
        
        <form class="bg-white w-full md:w-2/3  rounded "
        onSubmit={handleSubmit}
        >
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
                        <input class=" appearance-none border rounded w-full py-2 px-3 
                        text-xl text-gray-700  focus:outline-blue-200 focus:shadow-outline " 
                        id="firstname" type="text" placeholder="Enter your first name"
                        name='firstname' 
                        value={formValues.firstname}
                        onChange={handleChange} 
                        />
                        <p className='text-sm text-red-400'>{formErrors.firstname}</p>
                    </div>
                    
                    <div class="w-full md:w-1/2">
                        <label class="block text-gray-800 text-lg font-inter mb-2" for="lastname">
                            Last name
                        </label>
                        <input class=" appearance-none border  rounded w-full py-2 px-3 
                        text-xl text-gray-700 mb-3 focus:outline-blue-200 focus:shadow-outline" 
                        id="lastname" type="text" placeholder="Enter your last name" 
                        name='lastname'
                        value={formValues.lastname}
                        onChange={handleChange} 
                        />
                        <p className='text-sm text-red-400'>{formErrors.lastname}</p>
                    </div>
                    
                </div>

                
                <div className="w-full mb-6">
                    <label class="block text-gray-800 text-lg font-inter mb-2" for="email">
                            Email
                    </label>
                    <input class=" appearance-none border rounded w-full py-2 px-3 text-xl 
                    text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline" 
                    id="email" type="email" placeholder="yourname@email.com" 
                    name='email'
                    value={formValues.email}
                    onChange={handleChange}  
                    />
                    <p className='text-sm text-red-400'>{formErrors.email}</p>
                </div>

                

               
                <div class="w-full mb-6">
                    <label class="block text-gray-800 text-lg font-inter mb-2" for="message">
                        Message
                    </label>
                    <textarea rows={6} class="rounded-lg appearance-none border rounded w-full py-2 px-3 text-xl text-gray-700 
                    leading-tight focus:outline-blue-200 focus:shadow-outline" 
                    id="message" type="textarea" placeholder="Send me a message and I will respond as soon as possible..." 
                    name='message'
                    value={formValues.message}
                    onChange={handleChange} 
                    />
                    <p className='text-sm text-red-400'>{formErrors.message}</p>
                </div>
                

                <div class=" w-full md:flex md:items-center mb-6">
                    
                    <label class="w-full flex items-center text-gray-500 font-small">
                        <input className="border rounded-lg mr-2 w-6 h-6  hover:border hover:border-blue-200" type="checkbox" 
                       
                        onChange={handleCheck}
                        />
                        <span class="text-l md:text-xl">
                            You agree to providing your data to LeBeela Who may contact you.
                        </span>
                    </label>
                    {isCheck ? (<p className='text-sm text-red-400'>{checkError}</p>) : " "}
                    
                </div>
                
                <button class="w-full bg-blue-400 text-white text-lg font-bold py-4 text-center rounded-lg hover:bg-blue-300 focus:outline-none focus:shadow-outline" >
                    Send a message
                </button>
                {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='p-10 text-green-500 text-center mt:6'>Message sent!</div>) : " "}
                    
                
        </form>
        
    </div>
    

    
  )
}

export default ContactForm