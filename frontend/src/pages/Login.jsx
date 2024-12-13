import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-200'>
                Login
                <span className='text-blue-500'> Chat-App</span>
            </h1>

            <form>
                <div>
                    <lable className='label p-2'>
                        <span className='text-base label-text text-slate-200 '>Email</span>
                    </lable>
                    <input type="email" placeholder="Enter your Email" className='w-full input input-bordered h-10 bg-slate-700 focus:outline-none text-slate-300'/>
                </div>

                <div>
                <lable className='label p-2'>
                        <span className='text-base label-text text-slate-200'>Password</span>
                    </lable>
                    <input type="password" placeholder="Enter your Password" className='w-full input input-bordered h-10 bg-slate-700 focus:outline-none text-slate-300'/>
                </div>
                
                <div>
                    <p className='text-slate-200 mt-5'>Don't have an account? <a className='text-blue-400 font-semibold hover:underline hover:font-bold hover:text-blue-700' href='#'> Click here</a></p>
                </div>

                <div>
                <button className='btn btn-block btn-sm mt-2 cursor-pointer'>Login</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Login
