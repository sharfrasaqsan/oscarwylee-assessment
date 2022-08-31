import React from "react";
import "./aboutProduct.css";

const AboutProduct = () => {
  return (
    <div className="about-product">
      <div>
        <fieldset className="about-the-frames">
          <legend>About the Frames</legend>
          <div className="about-frame-left">
            <p>
              A classic brow-glasses, remagined. Marco has spring hinges and an
              adjustable nose fit for maximum comfort (and style). Now available
              in small.
            </p>
          </div>

          <div className="about-frame-right">
            <h3>Made from Acetate</h3>
            <div className="container">
              <div className="box">
                <h3>frame fit</h3>
                <p>wide</p>
              </div>
              <div className="box">
                <h3>measurements</h3>
                <p>56 - 19 - 148</p>
              </div>
            </div>

            <p>
              These measurements mean lens width, bridge, and temple length in
              millimetres (mm). They can be found on the inside of the temple
              arm. If you already have a pair that you like, you can compare it
              to these measurements.
            </p>

            <div className="p-border">
              <p>
                Filter category 3-General purpose sunglasses. High protection
                against sunglare. Good UV Protection. Not suitable for driving
                in twilight, at night or under dull conditions
              </p>
              <p>
                This frame comes with polarised lenses. An additional $100 will
                be added to your order total for prescription orders.
              </p>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default AboutProduct;
