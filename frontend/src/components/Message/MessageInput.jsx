import React, { useState } from 'react'
import assets from '../../assets/assets'
import useSendMessage from '../../Hook/useSendMessage'

const MessageInput = () => {
  const [messages,setMessages] = useState("")
  const {loading, sendMessage} = useSendMessage()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!messages) return ;
    await sendMessage(messages)
    setMessages("")
  }
  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input type="text" id='message'
        onChange={(e)=>{setMessages(e.target.value)}}
        value={messages}
        className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' 
        placeholder='Send a message'/>

        <button type='submit' className='absolute inset-y-0 end-0 flex items-center px-3'>
          {loading ?<span className='loading loading-spinner'></span> : <img src={assets.sendButton} alt="" />}
            
        </button>
      </div>
    </form>
  )
}

export default MessageInput
