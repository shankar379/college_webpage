// ChatWindow.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './ChatWindow.css'; // Make sure to create this CSS file

const ChatWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleOpen = () => setIsOpen(!isOpen);
  const handleChange = (event) => setMessage(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const result = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: message,
        max_tokens: 60
      }, {
        headers: {
          'Authorization': `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`
        }
      });
      const newMessage = {
        role: 'user',
        content: message
      };
      const newResponse = {
        role: 'bot',
        content: result.data.choices[0].text
      };
      setConversation([...conversation, newMessage, newResponse]);
      setMessage('');
    } catch (error) {
      setError('Failed to fetch response. Please try again.');
      console.error('Error fetching response:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className={`chat-container ${isOpen ? 'open' : ''}`}>
      <button className="chat-button" onClick={handleOpen}>
        <img src="/src/assets/chat-icon.png" alt="Chat" />
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <button onClick={handleOpen}>Close</button>
          </div>
          {conversation.length === 0 && (
            <div className="chat-intro-card">
              Hi, I'm AI and can answer any question in this world.
            </div>
          )}
          <div className="chat-body">
            {error && <div className="error-message">{error}</div>}
            {conversation.map((entry, index) => (
              <div key={index} className={`message ${entry.role}`}>
                {entry.content}
              </div>
            ))}
          </div>
          <form className="chat-form" onSubmit={handleSubmit}>
            <input type="text" value={message} onChange={handleChange} placeholder="Ask me anything..." />
            <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Send'}</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
