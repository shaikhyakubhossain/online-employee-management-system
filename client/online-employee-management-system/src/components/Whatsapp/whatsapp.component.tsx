import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+918144772854";
  const message = encodeURIComponent(
    "Hello, I want to share my opinion about EmployeeVerse."
  );


  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
