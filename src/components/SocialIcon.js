import React from "react";
import "./SocialIcon.css";

const SocialIcon = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/?locale=ar_AR" 
      rel="noopener noreferrer" target="_blank">
        <img src="/icons8-facebook-48.png" alt="facebook icon" className="icon" />
      </a>
      <a href="https://www.instagram.com/" 
      rel="noopener noreferrer" target="_blank">
        <img src="/icons8-instagram-48.png" alt="instagram icon" className="icon" />
      </a>
      <a
        href="https://accounts.google.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src="/icons8-google-48.png" alt="google icon" className="icon" />
      </a>
    </div>
  );
};

export default SocialIcon;


