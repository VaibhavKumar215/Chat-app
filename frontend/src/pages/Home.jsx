import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import MessageContainer from '../components/Message/MessageContainer'
import { ConversationProvider } from '../Context/conversationContext'

const Home = () => {
  return (
    <div className='flex h-full md:h-[500px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0'>
      <ConversationProvider>
        <Sidebar />
        <MessageContainer />
      </ConversationProvider>
     
    </div>
  )
}

export default Home
