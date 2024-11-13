import React, {useState, useRef, useEffect} from "react";
import {IoChatbubblesOutline} from "react-icons/io5";
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
    return {genderCategory, interestCategory};
};

const recommendProducts = (input) => {
    const {genderCategory, interestCategory} = parseUserPreferences(input);

    // Check for an exact match
    const exactMatch = products.find((product) =>
        product.name.toLowerCase().includes(input.toLowerCase())
    );

    if (exactMatch) {
        // If an exact match is found, don't add additional category-based matches
        return `Here is the product you requested: <strong>${exactMatch.name}</strong> for ${exactMatch.price}.`;
    }

    // Otherwise, filter products based on gender or interest category
    const genderFilteredProducts = genderCategory
        ? products.filter((product) => {
            return (
                (genderCategory === "Women" && product.category === "Women") ||
                (genderCategory === "Men" && product.category === "Men") ||
                (genderCategory === "Kids" && product.category === "Kids")
            );
        })
        : [];

    const interestFilteredProducts = interestCategory
        ? products.filter((product) => product.category === interestCategory)
        : [];

    // Combine both filtered lists and remove duplicates
    const combinedProducts = [
        ...new Map([
            ...genderFilteredProducts,
            ...interestFilteredProducts,
        ].map((item) => [item.name, item])).values(),
    ];

    // If no matching products were found, provide a fallback message
    if (combinedProducts.length === 0) {
        return "I couldn't find any matching products based on your preferences. Try broadening your interests or categories!";
    }

    return `Here are some products you might like: ${combinedProducts
        .slice(0, 3) // Limit the number of suggestions if necessary
        .map((p) => `<strong>${p.name}</strong> for ${p.price}`)
        .join(", ")}.`;
};


const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {sender: "bot", text: "Hello! How can I assist you today?"},
    ]);
    const [input, setInput] = useState("");
    const chatContentRef = useRef(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = () => {
        if (input.trim() === "") return;

        const userMessage = {sender: "user", text: input};

        // Directly generate the bot's response here
        const botResponse = generateResponse(input);

        // Update both the user message and bot response in one state update
        setMessages((prevMessages) => [
            ...prevMessages,
            userMessage,
            botResponse,
        ]);

        setInput(""); // Clear input after sending
    };


    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    const generateResponse = (input) => {
        const greetings = [
            "Hi there!",
            "Hello! How can I help you?",
            "Hey! What's up?",
            "Greetings! What can I do for you?",
            "Hi! How can I assist you today?",
        ];
        const trimmedInput = input.trim().toLowerCase();

        if (["hi", "hello", "hey"].includes(trimmedInput)) {
            return {
                sender: "bot",
                text: greetings[Math.floor(Math.random() * greetings.length)],
            };
        }

        return {
            sender: "bot",
            text: recommendProducts(input),
        };
    };

    useEffect(() => {
        if (chatContentRef.current) {
            chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chatbot-container">
            <button onClick={toggleChat} className="chatbot-icon">
                <IoChatbubblesOutline size={30}/>
            </button>

            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <h4>Chat with Us</h4>
                        <button onClick={toggleChat} className="close-button">
                            ✖
                        </button>
                    </div>
                    <div className="chat-content" ref={chatContentRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                <span dangerouslySetInnerHTML={{__html: msg.text}}/>
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress}
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
