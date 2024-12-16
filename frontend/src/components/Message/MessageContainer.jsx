import React,{useEffect, useState} from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import assets from '../../assets/assets'
import { useConversation } from '../../Context/conversationContext'
import { useAuthContext } from '../../Context/authContext'

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation,setSearch} = useConversation()
  const {authUser} = useAuthContext()

  useEffect(() => {
    //cleanup function
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])
  
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? (
        <div className='flex items-center justify-center w-full h-full'>
          <div className='px-4 text-center text-gray-200 font-semibold flex flex-col items-center gap-2'>
            <p>Welcome 👋 {authUser.fullName}</p>
            <p>Select a chat to start messaging</p>
            <img src={assets.messageImage} alt="" className='sm:w-[48px] w-8 sm:h-[48px] h-8'/>
          </div>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text md:text-lg text-xs'>To: </span>
            <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}

export default MessageContainer
