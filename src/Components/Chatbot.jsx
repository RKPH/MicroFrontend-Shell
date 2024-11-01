import React, { useState } from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import "./Chatbot.css";

const categories = [
  "DropSet",
  "Adizero",
  "New Arrivals",
  "Taekwondo",
  "Running",
  "Football",
  "Basketball",
  "Training",
  "Lifestyle",
  "Outdoor",
  "Hiking",
  "Yoga",
  "Cycling",
  "Swimming",
  "Crossfit",
  "Kids",
  "Women",
  "Men",
  "Accessories",
  "Apparel",
];

const generateProducts = (categories) => {
  const products = [];
  const categoryCount = {};

  for (let i = 0; i < 200; i++) {
    const category = categories[i % categories.length];
    if (!categoryCount[category]) {
      categoryCount[category] = 1;
    }
    products.push({
      imgSrc: `https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Product_${
        i + 1
      }.jpg`,
      price: `${(3000000 + i * 100000).toLocaleString()}₫`,
      name: `Giày ${category} ${categoryCount[category]}`,
      category: category,
    });
    categoryCount[category]++;
  }
  return products;
};

const products = generateProducts(categories);

const parseUserPreferences = (input) => {
  const lowerInput = input.toLowerCase();
  const genderCategory =
    lowerInput.includes("girl") || lowerInput.includes("woman")
      ? "Women"
      : lowerInput.includes("boy") || lowerInput.includes("man")
      ? "Men"
      : null;
  const interestCategory = categories.find((category) =>
    lowerInput.includes(category.toLowerCase())
  );
  return { genderCategory, interestCategory };
};

const recommendProducts = (input) => {
  const { genderCategory, interestCategory } = parseUserPreferences(input);
  const filteredProducts = products.filter((product) => {
    const isGenderMatched = genderCategory
      ? product.category === genderCategory
      : true;
    const isInterestMatched = interestCategory
      ? product.category === interestCategory
      : true;
    return isGenderMatched && isInterestMatched;
  });

  // Remove duplicates and select unique products
  const uniqueRecommendations = Array.from(
    new Map(filteredProducts.map((p) => [p.name, p])).values()
  );
  const recommendations = uniqueRecommendations.slice(0, 3);

  if (recommendations.length === 0) {
    return "I couldn't find any matching products based on your preferences. Try broadening your interests or categories!";
  }

  return `Here are some products you might like: ${recommendations
    .map((p) => `${p.name} for ${p.price}`)
    .join(", ")}.`;
};

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

  const generateResponse = (input) => {
    return {
      sender: "bot",
      text: recommendProducts(input),
    };
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
