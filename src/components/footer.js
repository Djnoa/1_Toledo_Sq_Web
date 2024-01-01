import React from 'react';
import './footer.css'; 
import toledoClubLogo from '../assets/toledo_club_logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <img src={toledoClubLogo} alt="Toledo Club Logo" />
      <div className = "footer-items">
      <a href="https://www.toledoclub.org">
        Visit the Main Toledo Club Website
      </a>
      <br />
        1234 Club Road, Toledo, OH 12345
        <br />
        Phone: (123) 456-7890
        
      </div>
    </footer>
  );
};

export default Footer;

