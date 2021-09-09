import React from "react";
import Card from "./Card";

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
              <div className="slide">
                <Card title=" Agreement for Transfer of Flat" />
              </div>
              <div className="slide">
                <Card
                  title=" Devlopment / Re-Devlopment Agreement"

                />

              </div>
              <div className="slide">
                <Card
                  title="Package Deal Agreement"

                />

              </div>
              <div className="slide">
                <Card
                  title="Leave & License Agreement"

                />
              </div>
              <div className="slide">
                <Card
                  title="Joint Venture Agreement"

                />
              </div>
              <div className="slide">
                <Card
                  title="Tripartie Agreement"

                />
              </div>
              <div className="slide">
                <Card
                  title="Deed Of Admission"

                />
              </div>
              <div className="slide">
                <Card
                  title="Society Registration"

                />
              </div>
              <div className="slide">
                <Card
                  title="Company Registration"

                />
              </div>
              <div className="slide">
                <Card
                  title="Death Certificate"
                />
              </div>
              <div className="slide">
                <Card
                  title="E-Chalan"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
      </section >

  );
}
export default Service;
