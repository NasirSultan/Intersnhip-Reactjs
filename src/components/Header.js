import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animsition/dist/css/animsition.min.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Style to ensure no overflow */}
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }

          .custom-header {
            background-color: transparent;
            padding: 10px 15px;
          }

          .dropdown-menu {
            min-width: 200px;
            padding: 0.5rem 0;
          }

          @media (max-width: 768px) {
            .dropdown-menu {
              min-width: 150px;
            }
          }
        `}
      </style>

      <div className="container-fluid d-flex justify-content-between align-items-center custom-header">
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
            <i className="fa-solid fa-list text-white"></i>
          </button>

          {/* Dropdown Menu with Animation */}
          <ul
            className={`dropdown-menu animsition ${isOpen ? "fade-in" : "fade-out"}`}
            style={{
              position: "absolute",
              top: "100%",
              right: "0",
              zIndex: "1000",
              display: isOpen ? "block" : "none",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              transition: "opacity 0.3s ease-in-out",
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
    </>
  );
};

export default Header;
