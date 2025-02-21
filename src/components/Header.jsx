import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>My Dev Portfolio</div>
      <nav>
        <ul style={navList}>
          <li style={navItem}><a href="#about" style={linkStyle}>About</a></li>
          <li style={navItem}><a href="#projects" style={linkStyle}>Projects</a></li>
          <li style={navItem}><a href="#contact" style={linkStyle}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#1d1d1d"
};

const logoStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "white"
};

const navList = {
  display: "flex",
  listStyleType: "none",
};

const navItem = {
  marginLeft: "20px"
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px"
};

export default Header;
