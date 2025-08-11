import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about xniux's digital services. Can you help me?");
    const phoneNumber = "6282228503355";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageSquare className="w-7 h-7" />
    </button>
  );
};

export default WhatsAppFloat;