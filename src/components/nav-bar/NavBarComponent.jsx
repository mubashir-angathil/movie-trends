import React from "react";
import "./Navbar.css";
import brandName from "../../assets/brand-name.png";

const NavBarComponent = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        {/* Logo */}
        <img className="brand_logo navbar-brand" src={brandName} alt="MB" />

        {/* Navbar Toggle Button */}
        <button
          className="navbar-toggler absolute"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navbarItems.map((option) => (
              <li
                key={option.item}
                className="nav-item"
                onClick={() => {
                  const element = document.getElementById(
                    "navbarTogglerDemo03"
                  );
                  if (element) {
                    element.classList.toggle("show");
                  }
                }}
              >
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={option.route}
                >
                  {option.item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;

// Navbar Items Data
const navbarItems = [
  {
    item: "Home",
    route: "#home",
  },
  {
    item: "Action",
    route: "#action",
  },
  {
    item: "Fiction",
    route: "#fiction",
  },
  {
    item: "Horror",
    route: "#horror",
  },
];
