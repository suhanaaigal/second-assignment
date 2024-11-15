// import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Switch from "react-switch"; // Import react-switch
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome import
import { faOpencart } from '@fortawesome/free-brands-svg-icons'; // Cart icon import

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <nav className="navigation">
        <Link to="/">
          <h1 className="company-name">
            <span role="img" aria-label="cake">👨‍🍳</span>Cakezai
          </h1>
        </Link>
        <ul className="list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart"><FontAwesomeIcon icon={faOpencart} /> Cart</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li>
            <div className="theme-toggle">
              <span role="img" aria-label="sun">🌞</span>
              <Switch
                onChange={toggleTheme} // Trigger theme change
                checked={theme === "dark"} // Check if the theme is dark
                offColor="#ADD8E6" // Off color (light theme)
                onColor="#000000" // On color (dark theme)
                uncheckedIcon={false} // No icon on off state
                checkedIcon={false} // No icon on on state
              />
              <span role="img" aria-label="moon">🌜</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
