import React from "react";
import Card from "./Card";
import list from "../data/listOfServices.json"

function Service(props) {
  return (
    <section className="page-section" id="services">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">Our Services</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
          <div className="yash">

            <div className="slider">
              <div className="slide-track">
                {list.items.map((item, i) => (
                  <div className="slide">
                    <Card title={item} />
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section >

  );
}
export default Service;
