import React from "react";
import CoreFeatures from "./CoreFeatures";
import './feature.css'
import Qualityfeatures from "./Qualityfeatures";
import Corefeatlast from "./Corefeatlast";
import Working from "./Working";

const Features = () => {
  return (
    <>
      <section id="feature" className="introfeature">
        <div className="container features">
          <div className="qualityfeatures">
            <p>QUALITY FEATURES</p>
            <h2>Meet exciting feature of app</h2>
          </div>
          <div className="featureImages">
            <div className="imagediv">
              <img src="./images/one.svg" alt="" />
              <h4>Vector Editing</h4>
              <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
            </div>
            <div className="imagediv">
              <img src="./images/two.svg" alt="" />
              <h4>Customize & Monitoring</h4>
              <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
            </div>
            <div className="imagediv">
              <img src="./images/three.svg" alt="" />
              <h4>Quality & Short-period</h4>
              <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
            </div>
          </div>
        </div>
      </section>
      <CoreFeatures/>
      <Qualityfeatures/>
      <Corefeatlast/>
      <Working/>
    </>
  );
};

export default Features;
