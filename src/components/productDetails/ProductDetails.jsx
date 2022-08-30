import React from "react";
import "./productDetails.css";
import Image1 from "../../assets/sunglass1.jpg";
import Zip from "../../assets/zip.svg";
import Color1 from "../../assets/oscar-swatches-modified.png";
import Color2 from "../../assets/oscar-swatches-modified (1).png";
import Color3 from "../../assets/oscar-swatches-modified (2).png";
import Color4 from "../../assets/oscar-swatches-modified (3).png";
import Color5 from "../../assets/oscar-swatches-modified (4).png";
import Color6 from "../../assets/oscar-swatches-modified (5).png";
import Color7 from "../../assets/oscar-swatches-modified (6).png";

const productDetails = () => {
  return (
    <div className="product-details">
      <div className="product-details-img">
        <div className="responsive-title hide display">
          <h1 id="responsive-haading">Gaby</h1>
          <hr id="responsive-hr" />
          <div className="product-discount-responsive">
            <h3 className="product-discount-title-responsive">2 pairs from $199</h3>
            <p>Discount auto-applied a checkout</p>
          </div>
        </div>
        <img className="product-details-image" src={Image1} alt="product" />
        <div className="image-zoom">
          <div className="border-zoom">
            <span className="image-zoom-span">Zoom</span>
            <i className="fas fa-search"></i>
          </div>
        </div>

        <div className="slider-dot">
          <span className="slider-dot active">
            <i className="fas fa-circle"></i>
          </span>
          <span>
            <i className="fas fa-circle"></i>
          </span>
          <span>
            <i className="fas fa-circle"></i>
          </span>
          <span>
            <i className="fas fa-circle"></i>
          </span>
          <span>
            <i className="fas fa-circle"></i>
          </span>
        </div>
      </div>

      <div className="product-details-info">
        <p className="hide display" style={{ padding: "10px 22px" }}>
          <span style={{ color: "#000", fontWeight: "800" }}> Color : </span>
          <span>Tobby Totoise</span>
        </p>
        <div className="product-discount">
          <h3 className="product-discount-title">2 pairs from $199</h3>
          <p>Discount auto-applied a checkout</p>
        </div>
        <hr className="hide" />
        <div className="product-info">
          <h1>Gaby</h1>

          <div className="product-colors">
            <div className="color"></div>
          </div>
          <img
            className="color-circle"
            id="active"
            src={Color1}
            alt="color 1"
          />
          <img className="color-circle" src={Color2} alt="color 2" />
          <img className="color-circle" src={Color3} alt="color 3" />
          <img className="color-circle" src={Color4} alt="color 4" />
          <img className="color-circle" src={Color5} alt="color 5" />
          <img className="color-circle" src={Color5} alt="color 5" />
          <img className="color-circle" src={Color6} alt="color 6" />
          <img className="color-circle" src={Color7} alt="color 7" />
          <p>
            <span style={{ color: "#000", fontWeight: "800" }}> Color : </span>
            <span>Tobby Totoise</span>
          </p>
        </div>
        <hr />
        <div className="week-offer">
          <h3>From $199.00</h3>
          <p>
            or ZIP it from{" "}
            <span style={{ color: "#000", fontWeight: "800" }}>$10/week</span>{" "}
            with
            <img id="zip-id" src={Zip} alt="" />
          </p>
        </div>
        <hr className="hide display" />

        <div className="product-details-btn">
          <button className="btn btn-primary">Prescription</button>
          <button className="btn btn-secondary">Book an eye test</button>
        </div>
      </div>
    </div>
  );
};

export default productDetails;
