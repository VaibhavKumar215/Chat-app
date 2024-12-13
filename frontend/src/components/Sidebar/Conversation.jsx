import React from 'react'

const Conversation = () => {
    return (
        <div className='py-2 flex flex-col overflow-y-auto'>
            <div className='flex gap-2 items-center hover:bg-sky-500 rounded py-1 cursor-pointer duration-500'>
                <div className="avatar online">
                    <div className="md:w-10 w-7 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>

               <div className='flex flex-col flex-1 '>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200 md:text-base text-xs'>Summit Kumar</p>
                        <span>😈</span>
                    </div>
               </div>
            </div>
            <div className='divider my-0 py-0 h-1'>

            </div>
        </div>
    )
}

export default Conversation
