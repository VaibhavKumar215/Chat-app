import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-200'>
          Sign Up
          <span className='text-blue-500'> Chat-App</span>
        </h1>

        <form>
        <div>
            <lable className='label p-2'>
              <span className='text-base label-text text-slate-200'>Name</span>
            </lable>
            <input type="type" placeholder="Enter your fullname" className='w-full input input-bordered h-10 bg-slate-700 focus:outline-none text-slate-300' />
          </div>
          <div>
            <lable className='label p-2'>
              <span className='text-base label-text text-slate-200'>Email</span>
            </lable>
            <input type="email" placeholder="Enter your Email" className='w-full input input-bordered h-10 bg-slate-700 focus:outline-none text-slate-300' />
          </div>

          <div>
            <lable className='label p-2'>
              <span className='text-base label-text text-slate-200 '>Password</span>
            </lable>
            <input type="password" placeholder="Enter your Password" className='w-full input input-bordered h-10 bg-slate-700 focus:outline-none text-slate-300' />
          </div>

          <div>
            <lable className='label p-2'>
              <span className='text-base label-text text-slate-200 '>Confirm Password</span>
            </lable>
            <input type="password" placeholder="Enter your Password" className='w-full input input-bordered h-10 bg-slate-700 focus:outline-none text-slate-300' />
          </div>

          <div className='flex mt-2 gap-x-5'>
            <div className='form-control'>
              <label htmlFor="checkbox" className='label gap-2 cursor-pointer'>
                <span className='label-text text-slate-200'>Male</span>
                <input type="checkbox" className='checkbox border-slate-900 h-5 w-5'/>
              </label>
            </div>

            <div className='form-control'>
              <label htmlFor="checkbox" className='label gap-2 cursor-pointer'>
                <span className='label-text text-slate-200'>Female</span>
                <input type="checkbox" className='checkbox border-slate-900 h-5 w-5'/>
              </label>
            </div>
          </div>

          <div>
            <p className='text-white mt-2'>Already have an account? <a className='text-blue-400 font-semibold hover:underline hover:font-bold hover:text-blue-700 inline-block' href='#'> Click here</a></p>
          </div>

          <div>
            <button className='btn btn-block btn-sm mt-2 cursor-pointer'>Sign Up</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Signup
