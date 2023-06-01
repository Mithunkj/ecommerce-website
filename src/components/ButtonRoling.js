import { useState } from "react";
import "../styles/mainStyle.css";

function ButtonRoling() {
  const { isLoading, setIsLoading } = useState(false);
  const handleClick = async () => {
    setIsLoading(true);
    // setIsLoading(false);
  };
  return (
    <>
      <button
        disabled={isLoading}
        onClick={handleClick}
        className={`button ${isLoading ? "Loading" : ""}`}
      >
        <img />
        <span>{isLoading ? "Reloding" : "Reaload App"}</span>
      </button>
    </>
  );
}

export default ButtonRoling;
