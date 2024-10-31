// src/Components/Chatbot.jsx
import React, { useState } from "react";
import { IoChatbubblesOutline } from "react-icons/io5"; // Import an icon for the chatbot button
import "./Chatbot.css"; // Add styles for the chatbot

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot Icon */}
      <button onClick={toggleChat} className="chatbot-icon">
        <IoChatbubblesOutline size={30} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>Chat with Us</h4>
            <button onClick={toggleChat} className="close-button">
              ✖
            </button>
          </div>
          <div className="chat-content">
            {/* Add chat messages or a chatbot API integration here */}
            <p>Hello! How can I assist you today?</p>
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
