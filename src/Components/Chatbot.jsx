// src/Components/Chatbot.jsx
import React, { useState } from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message to the chat
    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Generate a bot response
    const botResponse = generateResponse(input);
    setMessages((prevMessages) => [...prevMessages, botResponse]);

    // Clear input
    setInput("");
  };

  // Function to generate a bot response based on user input
  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();
    let responseText;

    if (lowerInput.includes("price") && lowerInput.includes("item")) {
      responseText = "The price of the item is 2,500,000₫.";
    } else if (lowerInput.includes("help")) {
      responseText =
        "I'm here to help! You can ask about product prices or availability.";
    } else {
      responseText = "I'm sorry, I didn't understand that. Could you rephrase?";
    }

    return { sender: "bot", text: responseText };
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
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
