import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import MessageContainer from '../components/Message/MessageContainer'

const Home = () => {
  return (
    <div className='flex h-full md:h-[500px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home
