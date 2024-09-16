import React, { useState } from 'react';
import './ChatComponent.css'; // Assuming you want to isolate the styles for this component

// For generating a sessionId, let's use a simple function for now (You can replace it with a proper UUID generator if needed)
const generateSessionId = () => {
  return `test-${Math.random().toString(36).substring(2, 15)}-${Math.random().toString(36).substring(2, 15)}`;
};

const ChatComponent = () => {
  const [chatInput, setChatInput] = useState('');
  const [sessionId, setSessionId] = useState(generateSessionId());
  const [response, setResponse] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (chatInput.trim() === '') {
      // Prevent empty messages
      return;
    }

    const newMessage = { text: chatInput, sender: 'user' }; // Message from the user
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    const payload = [
      {
        sessionId: sessionId,
        action: 'sendMessage',
        chatInput: chatInput,
      },
    ];

    try {
      const res = await fetch('https://api.bglabs.uk/webhook/f288dd2-f2d6-451f-b7f4-ec6832e2ec98', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setResponse(data);

      // Append server response to messages
      const botMessage = { text: data.response || 'No response', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      
      setChatInput(''); // Clear input after sending the message
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">LLM Chat Model</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form className="chat-footer" onSubmit={handleSubmit}>
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message..."
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          required
        />
        <button type="submit" className="chat-send-btn">Send</button>
      </form>
    </div>
  );
};

export default ChatComponent;
