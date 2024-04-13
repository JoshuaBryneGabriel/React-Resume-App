// src/components/ChatRoom.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Replace with your server URL

function ChatRoom() {
  // State for chat messages
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Listen for incoming messages
  useEffect(() => {
    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  // Send a new message
  const handleSendMessage = () => {
    socket.emit('chat message', newMessage);
    setNewMessage('getmessga ');
  };

  return (
    <div>
      {/* Display chat messages */}
      {messages.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}

      {/* Input field for new messages */}
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default ChatRoom;
