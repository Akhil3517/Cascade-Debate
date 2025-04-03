
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPaperPlane, FaMicrophone } from "react-icons/fa";

function Chat() {
  const location = useLocation();
  const selectedCharacter = location.state?.character?.name || "Newton"; // Default character

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messageEndRef = useRef(null);
  const [listening, setListening] = useState(false);

  // Function to send message
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    try {
      const response = await axios.post("http://localhost:5000/chat", {
        message: input,
        character: selectedCharacter,
      });

      const aiMessage = { text: response.data.reply, sender: "ai" };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Speech-to-text functionality
  const startListening = () => {
    setListening(true);
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      setInput(event.results[0][0].transcript);
      setListening(false);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognition.start();
  };

  // Auto-scroll to latest message
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen p-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4 text-center">{selectedCharacter} Chat</h2>

      {/* Chat messages */}
      <div className="flex-grow overflow-y-auto p-4 bg-gray-800 rounded-xl shadow-lg">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            className={`mb-2 p-3 rounded-lg w-fit max-w-xs ${
              msg.sender === "user" ? "bg-blue-500 ml-auto" : "bg-gray-600"
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <strong>{msg.sender === "user" ? "You" : selectedCharacter}:</strong> {msg.text}
          </motion.div>
        ))}
        <div ref={messageEndRef} />
      </div>

      {/* Input Section */}
      <div className="flex items-center mt-4 space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-3 rounded-xl bg-gray-700 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <motion.button
          onClick={sendMessage}
          className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          <FaPaperPlane size={20} />
        </motion.button>
        <motion.button
          onClick={startListening}
          disabled={listening}
          className={`p-3 rounded-full shadow-lg ${
            listening ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
          }`}
          whileHover={{ scale: 1.1 }}
        >
          <FaMicrophone size={20} />
        </motion.button>
      </div>
    </div>
  );
}

export default Chat;
