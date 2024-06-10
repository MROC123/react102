import React from "react";
import logo from "../images/logo192.png";

export default function Header() {
  return (
    <nav className="nav">
      <div className="nav--head">
        <img src={logo}
        alt="React Logo"
        className="nav--icon"
        />
        <h1>React Facts</h1>
      </div>
      <div className="nav--text">
        <h1>React - Project 1</h1>
      </div>
    </nav>
  )
}
