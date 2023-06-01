import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import "../styles/mainStyle.css";

function Services() {
  return (
    <div>
      <div className="container">
        <div className="services-row" >
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h1>Super Fast</h1>
            </div>
          </div>
          <div className="services-2">
            <div>
              <TbTruckDelivery className="icon" />
              <h1>services-2</h1>
            </div>
            <div className="services-2">
              <TbTruckDelivery className="icon" />
              <h1>services-2</h1>
            </div>
          </div>
          <div className="services-3">
            <TbTruckDelivery className="icon" />
            <h1>Super Fast</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
