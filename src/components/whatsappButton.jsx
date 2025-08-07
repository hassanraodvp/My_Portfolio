import React from "react";
import { TbBrandWhatsapp } from "react-icons/tb";

const whatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923058887237" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50"
    >
     <TbBrandWhatsapp className="text-3xl md:text-4xl animate-pulse"/>

    </a>
  );
};

export default whatsAppButton;
