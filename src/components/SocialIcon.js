import React from "react";
import "./SocialIcon.css";

const  SocialIcon= () => {
  const icons = [
    {
      href: "https://www.facebook.com/?locale=ar_AR",
      src: "/icons8-facebook-48.png",
      alt: "facebook icon",
    },
    {
      href: "https://www.instagram.com/",
      src: "/icons8-instagram-48.png",
      alt: "instagram icon",
    },
    {
      href: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://accounts.google.com/&ved=2ahUKEwj1scbhx5GKAxV69QIHHTymGfMQFnoECBwQAQ&usg=AOvVaw33vbO0yD5ue-bN0tdaehNC",
      src: "icons8-google-48.png",
      alt: "google icon",
    },
  ];

  return (
    <div className="social-icons">
      {icons.map((icon, index) => (
        <a key={index} href={icons.href} >
          <img src={icon.src} alt={icon.alt} className="icon" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcon;