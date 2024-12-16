import React, { useEffect, useRef } from 'react'
import userConversations from '../../Hook/userConversations'
import { getRandomEmoji } from '../../assets/emoji'
import { useConversation } from '../../Context/conversationContext'
import { useSocketContext } from '../../Context/socketContext'

const Conversation = () => {
    const { loading, conversations } = userConversations()
    const { selectedConversation, setSelectedConversation, search, setSearch } = useConversation()
    const selectedConversationRef = useRef(null)
    const { onlineUsers } = useSocketContext()

    // Check if a user is online based on their conversation ID
    const isOnline = (conversationId) => onlineUsers.includes(conversationId)

    const filteredConversations = conversations.filter(conversation =>
        conversation.fullName.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        setSearch("");
        setTimeout(() => {
            if (selectedConversationRef.current) {
                selectedConversationRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }, [selectedConversation]);

    return (
        <div className='py-2 flex flex-col overflow-y-auto'>
            {loading ? <span className='loading loading-spinner'></span>
                : filteredConversations.length === 0 ? (
                    <p className='text-white'>No results found</p>
                ) : (
                    filteredConversations.map((conversation, index) => (
                        <div key={conversation._id}
                            ref={selectedConversation?._id === conversation._id ? selectedConversationRef : null}>
                            <div onClick={() => { setSelectedConversation(conversation) }}
                                className={`flex gap-2 items-center hover:bg-sky-500 rounded py-1 px-1 cursor-pointer duration-500 ${selectedConversation?._id === conversation._id ? 'bg-sky-500' : ""}`}>
                                <div className={`avatar ${isOnline(conversation._id) ? 'online' : ""}`}>
                                    <div className="md:w-10 w-7 rounded-full">
                                        <img src={conversation.profilePic} />
                                    </div>
                                </div>

                                <div className='flex flex-col flex-1 '>
                                    <div className='flex gap-3 justify-between'>
                                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                                        <span>{getRandomEmoji()}</span>
                                    </div>
                                </div>
                            </div>
                            {index !== conversations.length - 1 && (<div className='divider my-0 py-0 h-1'></div>)}
                        </div>
                    ))
                )}
        </div>
    )
}

export default Conversation
