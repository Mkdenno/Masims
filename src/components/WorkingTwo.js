import React from "react";
import "./working2.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

const WorkingTwo = () => {
  return (
    <>
      <section id="working" className=" working">
        <div className="">
          <div className="workingfunctions ">
            <h6>WHATS THE FUNCTION</h6>
            <h1>Let's see how it works</h1>
          </div>
          <div className="workingdivs">
            <div className="workingdiv1">
             <div className="topsa">
             <h3>Free Plan</h3>
              <h6>For Small teams or office</h6>
             </div>
              <div className="div1">
                <i>
                  <BsCheckCircleFill />
                </i>
                <p>Ultimate access to all course, exercises and assessments</p>
              </div>
              <div className="div1">
                <i>
                  <BsCheckCircleFill />
                </i>
                <p>Ultimate access to all course, exercises and assessments</p>
              </div>
              <div className="div1">
                <i>
                  <BsCheckCircleFill />
                </i>
                <p>Ultimate access to all course, exercises and assessments</p>
              </div>
              <div className="divx">
                <i>
                  <AiFillCloseCircle />
                </i>
                <p>Ultimate access to all course, exercises and assessments</p>
              </div>
              <div className="divx">
                <i>
                  <AiFillCloseCircle />
                </i>
                <p>Ultimate access to all course, exercises and assessments</p>
              </div>
              <button className="signupb">Signup Now</button>
            </div>
            <div className="workingdiv2">
              <button className="workbtn">Recommended</button>
              <div className="tops">
                <div>
                  <h3>Premium</h3>
                  <p>For startup enterprise</p>
                </div>
                <div>
                  <p>Starting from</p>
                  <p>$29.99/mo</p>
                </div>
              </div>
              <div className="div1">
                <i>
                  <BsCheckCircleFill />
                </i>
                <p>Ultimate access to all course, exercises and assessments</p>
              </div>
              <div className="div1">
                <i>
                  <BsCheckCircleFill />
                </i>
                <p>Ultimate access to all course, exercises and assessments</p>
              </div>
              <div className="div1">
                <i>
                  <BsCheckCircleFill />
                </i>
                <p>Ultimate access to all course, exercises and assessments</p>
              </div>
              <div className="div1">
                <i>
                  <BsCheckCircleFill />
                </i>
                <p>Ultimate access to all course, exercises and assessments</p>
              </div>
              <div className="div1">
                <i>
                  <BsCheckCircleFill />
                </i>
                <p>Ultimate access to all course, exercises and assessments</p>
              </div>

              <button className="signupb2">Signup Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkingTwo;
