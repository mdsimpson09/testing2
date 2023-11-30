import React, { useState, useEffect } from 'react';
import './Chat.css';

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch messages from the server (mocked with a JSON file in this example)
    fetch('/api/messages')
      .then((response) => response.json())
      .then((data) => setMessages(data.messages));
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    // Mock sending a message to the server
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
        message: newMessage,
      }),
    });

    // Update the local state
    setMessages([...messages, { user, message: newMessage }]);
    setNewMessage('');
  };

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.user === user ? 'my-message' : 'other-message'}>
            <strong>{msg.user}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;