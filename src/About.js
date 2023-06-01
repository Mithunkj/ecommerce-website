import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { AppContext } from "./context/productcontex";

function About() {
  const { myName } = useContext(AppContext);

  const data = {
    name: "SRH Ecom",
  };

  return (
    <div>
      {myName}
      <HeroSection myData={data} />
    </div>
  );
}

export default About;
