import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import userLogin from '../Hook/userLogin'

const Login = () => {
    const [data, setData] = useState({
        email:"",
        password: ""
    })

    const {loading, login} = userLogin()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        await login(data)
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-200'>
                Login
                <span className='text-blue-500'> Chat-App</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-slate-200 '>Email</span>
                    </label>
                    <input type="email" 
                    onChange={(e)=>{setData({...data , email: e.target.value})}}
                    value={data.email}
                    placeholder="Enter your Email" className='w-full input input-bordered h-10 bg-slate-700 focus:outline-none text-slate-300'/>
                </div>

                <div>
                <label className='label p-2'>
                        <span className='text-base label-text text-slate-200'>Password</span>
                    </label>
                    <input type="password" 
                    onChange={(e)=>{setData({...data , password: e.target.value})}}
                    value={data.password}
                    placeholder="Enter your Password" className='w-full input input-bordered h-10 bg-slate-700 focus:outline-none text-slate-300'/>
                </div>
                
                <div>
                    <p className='text-slate-200 mt-5'>Don't have an account? <Link to={'/signup'} className='text-blue-400 font-semibold hover:underline hover:font-bold hover:text-blue-700'> Click here</Link></p>
                </div>

                <div>
                <button 
                disabled={loading}
                className='btn btn-block btn-sm mt-2 cursor-pointer'>{loading ? <span className='loading loading-spinner'></span> : "Login"}</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Login
