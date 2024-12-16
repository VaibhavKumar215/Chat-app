import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useAuthContext } from './Context/authContext'

const App = () => {

  const {authUser} = useAuthContext()
  return (
    <div className='p-4 h-screen flex items-center justify-center md:text-base text-[0.55rem]'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to="/login"/>}/>
        <Route path='/login' element={authUser ? <Navigate to="/"/> : <Login />}/>
        <Route path='/signup' element={authUser ? <Navigate to="/"/> : <Signup />}/>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
