import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [historicalFigure, setHistoricalFigure] = useState('Albert Einstein');
  const messageEndRef = useRef(null);
  const [listening, setListening] = useState(false);

  const speak = (text, voiceName) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    const selectedVoice = voices.find(voice => voice.name === voiceName);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    synth.speak(utterance);
  };

  const characterVoices = {
    'Albert Einstein': 'Google UK English Male',
    'Isaac Newton': 'Google UK English Male',
  };

  const sendMessage = async () => {
    if (input) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      try {
        const response = await axios.post('http://localhost:5000/chat', {
          message: input,
          character: historicalFigure,
        });
        const aiMessage = { text: response.data.reply, sender: 'ai' };
        setMessages([...messages, { text: input, sender: 'user' }, aiMessage]);

        const voiceName = characterVoices[historicalFigure];
        speak(aiMessage.text, voiceName);

      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const startListening = () => {
    setListening(true);
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setListening(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Time-Travel Debate Club</h2>

      <select
        value={historicalFigure}
        onChange={(e) => setHistoricalFigure(e.target.value)}
        className="border p-2 rounded mb-4"
      >
        <option>Albert Einstein</option>
        <option>Adolf Hitler</option>
        <option>Abraham Lincoln</option>
        <option>Leonardo da Vinci</option>
        <option>Marie Curie</option>
      </select>

      <div className="flex-grow overflow-y-auto mb-4 p-2 border rounded">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={`mb-2 p-2 rounded ${msg.sender === "user" ? "bg-blue-200 self-end" : "bg-gray-200 self-start"}`}
          >
            <strong>{msg.sender === "user" ? "You" : historicalFigure}:</strong> {msg.text}
          </p>
        ))}
        <div ref={messageEndRef} />
      </div>

      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-grow border p-2 rounded mr-2"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded">
          Send
        </button>
        <button onClick={startListening} disabled={listening} className={`p-2 rounded ${listening ? 'bg-gray-400' : 'bg-green-500 text-white'}`}>
          {listening ? 'Listening...' : '🎤 Speak'}
        </button>
      </div>
    </div>
  );
}

export default Chat;