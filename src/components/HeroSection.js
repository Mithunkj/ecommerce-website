import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

function HeroSection({ myData }) {
  const { name } = myData;

  return (
    <>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="images/hero.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <p>Welcome To</p>
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              {name}
            </h1>
            <p class="lead">Domi is a digital rental passport and contract</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <NavLink to="/">
                <Button>show now</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
