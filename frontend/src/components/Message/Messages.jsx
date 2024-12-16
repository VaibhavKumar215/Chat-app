import React, { useEffect, useLayoutEffect, useRef } from 'react';
import useGetMessages from '../../Hook/useGetMessages';
import MessageSkeleton from '../Skeleton/MessageSkeleton';
import { useAuthContext } from '../../Context/authContext';
import { useConversation } from '../../Context/conversationContext';
import useListenMessage from '../../Hook/useListenMessage';

const Messages = () => {
    const { loading, messages } = useGetMessages();
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    
    useListenMessage()

    const formatTime = (timestamp) => {
        return new Date(timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const lastMessageRef = useRef(null);

    useLayoutEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="px-4 flex-1 overflow-auto">
            {/* Display a placeholder if no messages are present */}
            {!loading && messages.length === 0 && (
                <p className="text-center text-white">
                    Send a message to start the conversation
                </p>
            )}
            
            {/* Show skeleton loaders when loading */}
            {loading &&
                [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}


            {/* Render messages */}
            {!loading && messages.length > 0 && messages.map((message, index) => (
                    <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}
                    >
                        {message.senderId === authUser?._id ? (
                            // Sender Message
                            <div className="chat chat-end">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            src={authUser?.profilePic}
                                            alt="Avatar"
                                        />
                                    </div>
                                </div>
                                <div className='chat-bubble text-white bg-blue-500'>
                                    {message.message}
                                </div>
                                <div className="chat-footer opacity-50 text-[0.5rem] flex gap-1 items-center text-white">
                                    {formatTime(message.createdAt)}
                                </div>
                            </div>
                        ) : (
                            // Receiver Message
                            <div className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            src={selectedConversation?.profilePic}
                                            alt="Avatar"
                                        />
                                    </div>
                                </div>
                                <div className={`chat-bubble text-white bg-blue-700 ${message.shake ? 'shake':''}`}>
                                    {message.message}
                                </div>
                                <div className="chat-footer opacity-50 text-[0.5rem] flex gap-1 items-center text-white">
                                    {formatTime(message.createdAt)}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default Messages;
