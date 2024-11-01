// src/Components/Chatbot.jsx
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

// Generate products based on the categories
const generateProducts = (categories) => {
  const products = [];
  for (let i = 0; i < 200; i++) {
    // Create 200 products total
    const category = categories[i % categories.length];
    products.push({
      imgSrc: `https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Product_${
        i + 1
      }.jpg`,
      price: `${(3000000 + i * 100000).toLocaleString()}₫`,
      name: `Giày ${category} ${i + 1}`,
      category: category,
    });
  }
  return products;
};

const products = generateProducts(categories);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: "user" },
    ]);
    handleBotResponse(input);
    setInput("");
  };

  const handleBotResponse = (query) => {
    const match = query.match(/Giày\s([A-Za-z]+)\s(\d+)/i);
    if (match) {
      const category = match[1];
      const number = parseInt(match[2], 10);

      const foundProduct = products.find(
        (product) =>
          product.category === category &&
          product.name === `Giày ${category} ${number}`
      );

      if (foundProduct) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: `Here is the product you requested:\n\n${foundProduct.name}\nPrice: ${foundProduct.price}\n\n`,
            sender: "bot",
          },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Sorry, I couldn't find that product.", sender: "bot" },
        ]);
      }
    } else {
      // Example interests and genders for recommendation
      const recommendedProducts = recommendProducts(query);
      if (recommendedProducts.length > 0) {
        const recommendationsText = recommendedProducts
          .map((product) => `${product.name} - Price: ${product.price}`)
          .join("\n");
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: `I couldn't find the exact product, but here are some recommendations:\n\n${recommendationsText}`,
            sender: "bot",
          },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Please specify a product like 'Giày Taekwondo 3'.",
            sender: "bot",
          },
        ]);
      }
    }
  };

  // Function to recommend products based on gender and interests
  const recommendProducts = (query) => {
    const recommended = [];
    const gender = /women/i.test(query)
      ? "Women"
      : /men/i.test(query)
      ? "Men"
      : null;
    const interest = /yoga/i.test(query)
      ? "Yoga"
      : /running/i.test(query)
      ? "Running"
      : null;

    // Recommend products based on gender
    if (gender) {
      const genderProducts = products.filter(
        (product) => product.category.toLowerCase() === gender.toLowerCase()
      );
      recommended.push(...genderProducts.slice(0, 3)); // Get 3 products for gender
    }

    // Recommend products based on interests
    if (interest) {
      const interestProducts = products.filter(
        (product) => product.category.toLowerCase() === interest.toLowerCase()
      );
      recommended.push(...interestProducts.slice(0, 3)); // Get 3 products for interest
    }

    return recommended;
  };

  return (
    <div className="chatbot-container">
      <button onClick={toggleChat} className="chatbot-icon">
        <IoChatbubblesOutline size={30} />
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>Chat with Us</h4>
            <button onClick={toggleChat} className="close-button">
              ✖
            </button>
          </div>
          <div className="chat-content">
            {messages.map((message, index) => (
              <p
                key={index}
                className={
                  message.sender === "bot" ? "message bot" : "message user"
                }
              >
                {message.text}
              </p>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
