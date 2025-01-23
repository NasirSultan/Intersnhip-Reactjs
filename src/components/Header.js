import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome for icons
import "animsition/dist/css/animsition.min.css"; // Import animsition CSS

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    // Close dropdown when a link is clicked
    setIsOpen(false);
  };

  return (
    
      <div className="container d-flex justify-content-between align-items-center " style={{ backgroundColor: "transparent" }}>
        {/* Left Side: Icon and Website Name */}
        <div className="d-flex align-items-center">
        
          <span className="fw-bold text-white">Clone</span>
        </div>

        {/* Right Side: Hamburger Menu */}
        <div className="dropdown" style={{ position: "relative" }}>
          {/* Hamburger Icon */}
          <button
            className="btn dropdown-toggle custom-button"
            type="button"
            onClick={toggleDropdown}
            aria-expanded={isOpen}
          >
        <i class="fa-solid fa-list text-white"></i>

          </button>

          {/* Dropdown Menu with Animation */}
          <ul
            className={`dropdown-menu animsition ${isOpen ? "fade-in" : "fade-out"}`}
            style={{
              position: "absolute",
              top: "100%", // Dropdown will appear just below the button
              right: "0", // Align to the right of the button
              zIndex: "1000", // Ensure it's above other content
              display: isOpen ? "block" : "none",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              minWidth: "160px", // Ensure the dropdown is not too narrow
              opacity: isOpen ? 1 : 0,
              transition: "opacity 0.3s ease-in-out", // Fade effect for dropdown
            }}
          >
            <li>
              <Link className="dropdown-item" to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/hotels" onClick={handleLinkClick}>
                Hotels
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/about-us" onClick={handleLinkClick}>
                About Us
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/gallery" onClick={handleLinkClick}>
                Gallery
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/news" onClick={handleLinkClick}>
                News
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

  );
};

export default Header;
