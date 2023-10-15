import React, { useState } from 'react';
import './styles.css';


const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/+254700139636`, '_blank');
  };

  const handleSMSClick = () => {
    window.open(`sms:+254700139636`, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:+254700139636`, '_blank');
  };

  return (
    <div className={`floating-button${isOpen ? ' active' : ''}`} onClick={handleToggle}>
      <div className="chat-icon">
        <i className="fa fa-comment"></i>
      </div>
      {isOpen && (
        <div className="chat-box">
          <div className="chat-options">
            <button className="whatsapp" onClick={handleWhatsAppClick}>
              <i className="fa fa-whatsapp"></i>
            </button>
            <button className="sms" onClick={handleSMSClick}>
              <i className="fa fa-comment"></i>
            </button>
            <button className="call" onClick={handleCallClick}>
              <i className="fa fa-phone"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
