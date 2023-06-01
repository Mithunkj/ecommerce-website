import React, { useEffect } from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import FeatuereProduct from "./components/FeatuereProduct";

function Home() {
  const data = {
    name: "SRH Store Home Page",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatuereProduct />
      <Services />
    </>
  );
}

export default Home;
