import React from 'react'
import search from '../../assets/search-01-stroke-rounded.svg'

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input type="text" placeholder='Search...' className='input input-border focus:outline-none rounded-full bg-gray-900 text-white sm:w-auto w-[25vw] sm:h-12 h-[5vh] md:text-base text-xs'/>
      <button type='submit' className='btn btn-circle bg-sky-500 text-white md:min-h-12 min-h-2 sm:h-12 h-7 sm:w-12 w-7'>
        <img src={search} alt="Search icon" className='sm:w-[18px] w-3'/>
      </button>
    </form>
  )
}

export default SearchInput
