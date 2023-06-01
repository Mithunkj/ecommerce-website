import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaYoutube } from "react-icons/fa";
import "../styles/mainStyle.css";

function Footer() {
  return (
    <div>
      <h1>Footer</h1>

      <NavLink to="/contact">
        <Button>contact</Button>
      </NavLink>

      <div>
        <a href="https://youtu.be/X6EfH1KlZlk" target="_blank" rel="noreferrer">
        
          <FaYoutube className="icon" />
        </a>
      </div>
      <div>
        <h3>Call Us</h3>
        <a href="tel:6361849001">+91 6361849001</a>
      </div>
      <p>@{new Date().getFullYear()} SRH All Rights Reserved</p>
    </div>
  );
}

export default Footer;
