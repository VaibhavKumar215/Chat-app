import { useEffect } from "react";
import { useConversation } from "../Context/conversationContext";
import { useSocketContext } from "../Context/socketContext"
import NotificationSound from "../assets/notificationSound/notification_sound.mp3"
const useListenMessage = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation()

    useEffect(() => {
        if (!socket) return;
        const handleNewMessage = (newMessage) => {
            newMessage.shake = true;
            const sound = new Audio(NotificationSound)
            sound.play();
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setTimeout(() => {
                setMessages((prevMessages) =>
                    prevMessages.map((msg) =>
                        msg._id === newMessage._id ? { ...msg, shake: false } : msg
                    )
                );
            }, 1025);
        };
        socket.on("newMessage", handleNewMessage);
        return () => socket.off("newMessage", handleNewMessage);
    }, [socket, setMessages, messages]);
    
}

export default useListenMessage
