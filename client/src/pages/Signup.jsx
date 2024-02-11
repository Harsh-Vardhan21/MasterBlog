import { Button, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  const [formData , setFormData] = useState({})
  const handleChange = (e)=>{
      setFormData({...formData , [e.target.id]:e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signup' , {
        method: 'POST',
        headers: {'Content-type':'applicatio/json'},
        body: JSON.stringify(formData),
      })
      const data = await res.json();
    } catch (error) {
      
    }
  }


  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* leftside */}
        <div className='flex-1 p-5'>
          <Link to='/' 
                className='font-bold dark:text-white text-4xl'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white line-none'>
                Master Blog
              </span>
          </Link>
          <p className='text-sm mt-5 justify-items-stretch '>
          <span>Welcome to Master Blog!</span> <br/>
          <span>Create your account and join our vibrant community of writers and readers. Unlock the power to share your thoughts, insights, and stories with the world.</span><br/>
          Sign Up:<br/>
          [Username] - Choose a unique username that represents you.<br/>
          [Email] - Provide a valid email address to ensure seamless communication and account recovery.<br/>
          [Password] - Create a strong password to keep your account secure.<br/>
          </p>
          
        </div>

        {/* rightside */}

        <div className='flex-1 p-5'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div>
                <Label value='Your username'/>
                <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}/>
              </div>
              <div>
                <Label value='Your Email'/>
                <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange}/>
              </div>
              <div>
                <Label value='Your Password'/>
                <TextInput type='password ' placeholder='Password' id='password' onChange={handleChange}/>
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit'>SignUp</Button>
            </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account? </span>
            <Link to='/signin' className='text-blue-600'>
              Sign In
            </Link>
          </div>

        </div>



      </div>
    </div>
  )
}

export default Signup
