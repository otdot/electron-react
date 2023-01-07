import React from "react";

const Header = () => {
  return (
    <header>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Electron app</h1>
        <ul style={{ display: "flex", flexDirection: "row" }}>
          <li style={{ display: "inline", padding: "0 2px" }}>
            <a
              target="_blank"
              style={{ color: "black", textDecoration: "none" }}
              href="https://www.google.com"
              value="www.google.com"
            >
              Google
            </a>
          </li>
          <li style={{ display: "inline", padding: "0 2px" }}>
            <a
              target="_blank"
              style={{ color: "black", textDecoration: "none" }}
              href="https://www.linkedin.com"
            >
              Linkedin
            </a>
          </li>
          <li style={{ display: "inline", padding: "0 2px" }}>
            <a
              target="_blank"
              style={{ color: "black", textDecoration: "none" }}
              href="https://www.github.com"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
