import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/mainStyle.css";

import Nav from "./Nav";

function Header() {
  return (
    <>
      <header className="mainHeader">
        <NavLink to="/">
          <img src="" style={{ height: "5rem" }} />
        </NavLink>
        <Nav />
      </header>
    </>
  );
}

export default Header;
