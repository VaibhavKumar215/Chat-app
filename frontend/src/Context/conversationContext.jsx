import React, { createContext, useContext, useState } from "react";

// Create the context
const ConversationContext = createContext();

// Create a provider component
export const ConversationProvider = ({ children }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <ConversationContext.Provider
      value={{
        selectedConversation,
        setSelectedConversation,
        messages,
        setMessages,
        search, 
        setSearch
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

// Custom hook for easier access to the context
export const useConversation = () => {
  const context = useContext(ConversationContext);
  return context;
};
