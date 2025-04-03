
import React, { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPaperPlane, FaMicrophone } from "react-icons/fa";

function Chat() {
  const location = useLocation();
  const selectedCharacter = location.state?.character?.name || "Newton"; // Default character
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const messageEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Stop speech synthesis on refresh/unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  // Initialize Speech Recognition (Voice Input)
  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        sendMessage(transcript);
      };

      recognitionRef.current.onend = () => {
        setListening(false);
      };
    }
  }, []);

  // Text-to-Speech Function (AI Response)
  const speakText = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; 
    utterance.rate = 1; 
    utterance.pitch = 1;
    synth.speak(utterance);
  };

  // Function to send message
  const sendMessage = useCallback(async (msg = input) => {
    if (!msg.trim()) return;

    const userMessage = { text: msg, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true); // Show "Typing..." indicator

    try {
      const response = await axios.post("http://localhost:5000/chat", {
        message: msg,
        character: selectedCharacter,
      });

      const aiMessage = { text: response.data.reply || "I didn't understand that.", sender: "ai" };
      setMessages((prev) => [...prev, aiMessage]);

      // Speak AI response
      speakText(aiMessage.text);
    } catch (error) {
      console.error("Error sending message:", error.response?.data || error.message);
      setMessages((prev) => [...prev, { text: "Error: Unable to fetch response.", sender: "ai" }]);
    } finally {
      setLoading(false);
    }
  }, [input, selectedCharacter]);

  // Handle Enter Key Press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents adding a new line
      sendMessage();
    }
  };

  // Start Voice Recognition
  const startListening = () => {
    if (recognitionRef.current) {
      setListening(true);
      recognitionRef.current.start();
    }
  };

  return (
    <div className="flex flex-col h-screen p-6 bg-gray-900 text-white">
      {/* Header */}
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-4 text-center">{selectedCharacter} Chat</h2>
        <button className="bg-red-600 min-w-10 p-3 rounded text-white" onClick={() => navigate('/agents')}>
          END
        </button>
      </div>

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

        {/* Typing indicator */}
        {loading && (
          <motion.div
            className="mb-2 p-3 rounded-lg w-fit max-w-xs bg-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <strong>{selectedCharacter}:</strong> <span className="italic">Typing...</span>
          </motion.div>
        )}

        <div ref={messageEndRef} />
      </div>

      {/* Input Section */}
      <div className="flex items-center mt-4 space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress} // 🔹 Listen for Enter key
          placeholder="Type your message..."
          className="flex-grow p-3 rounded-xl bg-gray-700 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        {/* Send Button */}
        <motion.button
          onClick={() => sendMessage()}
          className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          disabled={loading || !input.trim()}
        >
          <FaPaperPlane size={20} />
        </motion.button>

        {/* Voice Button */}
        <motion.button
          onClick={startListening}
          className={`p-3 ${listening ? "bg-red-500" : "bg-green-500"} hover:bg-green-600 rounded-full shadow-lg`}
          whileHover={{ scale: 1.1 }}
        >
          <FaMicrophone size={20} />
        </motion.button>
      </div>
    </div>
  );
}

export default Chat;
