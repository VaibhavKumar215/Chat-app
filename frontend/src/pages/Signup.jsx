import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userSignup from '../Hook/userSignup'

const Signup = () => {

  const [input, setInput] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const { loading, signup } = userSignup()

  const handelSubmit = async(e) => {
    e.preventDefault()
    await signup(input)
    
  }
  
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-200'>
          Sign Up
          <span className='text-blue-500'> Chat-App</span>
        </h1>

        <form onSubmit={handelSubmit}>
        <div>
            <label htmlFor='fullname' className='label p-2'>
              <span className='text-base label-text text-slate-200'>Name</span>
            </label>
            <input type="type" id='fullname'
            onChange={(e)=>setInput({...input,fullName: e.target.value})} 
            value={input.fullName}
            placeholder="Enter your fullname" required className='w-full input input-bordered h-10 bg-slate-700 focus:outline-none text-slate-300' />
          </div>
          <div>
            <label htmlFor='email' className='label p-2'>
              <span className='text-base label-text text-slate-200'>Email</span>
            </label>
            <input type="email" id='email'
            onChange={(e)=>setInput({...input,email: e.target.value})} 
            value={input.email} 
            placeholder="Enter your Email" required className='w-full input input-bordered h-10 bg-slate-700 focus:outline-none text-slate-300' />
          </div>

          <div>
            <label htmlFor='password' className='label p-2'>
              <span className='text-base label-text text-slate-200 '>Password</span>
            </label>
            <input type="password" id='password'
            onChange={(e)=>setInput({...input,password: e.target.value})} 
            value={input.password}
            placeholder="Enter your Password" required 
            className='w-full input input-bordered h-10 bg-slate-700 focus:outline-none text-slate-300' />
          </div>

          <div>
            <label htmlFor='ConfirmPassord' className='label p-2'>
              <span className='text-base label-text text-slate-200 '>Confirm Password</span>
            </label>
            <input type="password" id='ConfirmPassword'
            onChange={(e)=>setInput({...input,confirmPassword: e.target.value})} 
            value={input.confirmPassword}
            placeholder="Enter your Password" required 
            className='w-full input input-bordered h-10 bg-slate-700 focus:outline-none text-slate-300' />
          </div>

          <div className='flex mt-2 gap-x-5'>
            <div className='form-control'>
              <label htmlFor="male" className='label gap-2 cursor-pointer'>
                <span className='label-text text-slate-200'>Male</span>
                <input type="checkbox"  id='male'
                onChange={()=>setInput({...input,gender:'Male'})}
                checked={input.gender === 'Male'}
                className='checkbox border-slate-900 h-5 w-5'/>
              </label>
            </div>

            <div className='form-control'>
              <label htmlFor="female" className='label gap-2 cursor-pointer'>
                <span className='label-text text-slate-200'>Female</span>
                <input type="checkbox" id='female'
                onChange={(e)=>setInput({...input,gender:'Female'})}
                checked={input.gender ==='Female'}
                className='checkbox border-slate-900 h-5 w-5'/>
              </label>
            </div>
          </div>

          <div>
            <p className='text-white mt-2'>Already have an account? <Link to={'/login'} className='text-blue-400 font-semibold hover:underline hover:font-bold hover:text-blue-700 inline-block'> Click here</Link></p>
          </div>

          <div>
            <button 
            disabled={loading}
            className='btn btn-block btn-sm mt-2 cursor-pointer'>{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Signup
