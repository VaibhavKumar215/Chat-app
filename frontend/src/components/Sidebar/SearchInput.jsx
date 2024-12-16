import React from 'react'
import search from '../../assets/search-01-stroke-rounded.svg'

import { data } from 'react-router-dom'
import { useConversation } from '../../Context/conversationContext'

const SearchInput = () => {
  const {search,setSearch} = useConversation()
  return (
    <div className='flex items-center gap-2'>
      <input type="text" 
      onChange={(e)=>setSearch(e.target.value)}
      value={search}
      placeholder='Search...' className='input input-border focus:outline-none rounded-full bg-gray-900 text-white sm:w-auto w-[25vw] sm:h-12 h-[2rem] '/>
      {/* <button type='submit' className='btn btn-circle bg-sky-500 text-white min-h-2 md:min-h-11 md:min-w-11 sm:h-10 sm:w-10 h-7 w-7'>
        <img src={search} alt="Search icon" className='sm:w-[18px] w-3'/>
      </button> */}
    </div>
  )
}

export default SearchInput
