import React,{useState} from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import assets from '../../assets/assets'

const MessageContainer = () => {
  const [noChatSeleted, setNoChatSeleted] = useState(true)
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {noChatSeleted ? (
        <div className='flex items-center justify-center w-full h-full'>
          <div className='px-4 text-center text-xs sm:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
            <p>Welcome 👋 Summit</p>
            <p>Select a chat to start messaging</p>
            <img src={assets.messageImage} alt="" className='sm:w-[48px] w-8 sm:h-[48px] h-8'/>
          </div>
        </div>
      ) : (
        <>
          <header className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To: </span>
            <span className='text-gray-900 font-bold'>Summit</span>
          </header>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}

export default MessageContainer
