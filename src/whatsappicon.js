import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 
import './index.css'; 

const WhatsappIcon = () => {
  return (
    <div className="whatsapp-icon">
      <a
        href="https://wa.me/919130309797?text=Hi%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={40} />
      </a>
    </div>
  );
};

export default WhatsappIcon;
