import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="icons first">
        <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faXTwitter} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
      </div>
      <p className="copyright"> Cakezai</p>
      <p className="copyright">Made with ❤️ Love</p>
    </footer>
  );
}

export default Footer;
