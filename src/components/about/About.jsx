import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-the-frames">
        <h1>About the Frames</h1>
        <div className="frame-left">
          <p>
            A classic brow-glasses, remagined. Marco has spring hinges and an
            adjustable nose fit for maximum comfort (and style). Now available
            in small.
          </p>
        </div>

        <div className="frame-right">
          <h2>Made from Acetate</h2>
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
        </div>
      </div>
    </div>
  );
};

export default About;
