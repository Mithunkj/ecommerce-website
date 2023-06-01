import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

function ErrorPage() {
  return (
    <div>
      <h2>Error 404</h2>
      <h3>UH OH! Your're lost</h3>
      <p></p>

      <NavLink to="/">
        <Button>Go Back to Home</Button>
      </NavLink>
    </div>
  );
}

export default ErrorPage;
