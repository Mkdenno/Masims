import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <section id="home" className="intro-section ">
        <div className=" container home">
          <div className="row">
            <div className="col-md-7 homeandicons">
              <div className="homeabout">
                <h1>Experience your ultimate mobile application</h1>
                <p>
                  Get your blood tests delivered at let home collect sample from
                  the victory of the managements that supplies best design
                  system guidelines ever.
                </p>
              </div>
             <div >
            <button className="homebtn">Get started</button>
            <button className="homebtn"></button>
             </div>
             <div className="sponsored">
                <label>Sponsored by:</label>
                <img src="./images/paypal.svg" alt="" />
                <img src="./images/google.svg" alt="" />
                <img src="./images/drobox.svg" alt="" />
             </div>
            </div>
            <div className="col-md-5">
            <div className="homeimage">
            <img src="./images/landingpic.png" alt="" />
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
