import React, { useState } from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conversation'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col md:w-auto w-[42vw]'>
        <SearchInput/>
       <div className='divider px-1'></div>
      <Conversation />
      <LogoutButton />
    </div>
  )
}

export default Sidebar
