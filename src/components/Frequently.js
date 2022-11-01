import React, { useState } from "react";
import "./frequent.css";
// import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";


const Frequently = () => {
    const [hide, ishide]=useState(false)
    const [hide1, ishide1]=useState(false)
    const [hide2, ishide2]=useState(false)
    const [hide3, ishide3]=useState(false)

    const handleclickone=()=> {
        ishide(!hide)
    }

    const handleclickotwo=()=> {
        ishide1(!hide1)
    }

    const handleclickThree=()=> {
        ishide2(!hide2)
    }

    const handleclickfour=()=> {
        ishide3(!hide3)
    }
  return (
    <>
      <section id="frequently" className="frequent-intro">
        <div className=" frequent">
          <div className="Frequently ">
            <h6>WHATS THE FUNCTION</h6>
            <h1>Let's see how it works</h1>
          </div>
          <div className="questions">
            <div className="one">
                <div className="iconpm">
                  <AiFillPlusCircle className="icon"/> 
                    
                <h6 onClick={handleclickone}>How to contact with riders emergency ?</h6>
                </div>
              {hide && <p>
                Get your website ads tests delivered at let collect sample from
                the victory of the managements that supplies best design system
                which guidelines ever with multiple features.
              </p>}
            </div>
            <div className="one">
                <div className="iconpm">
                <AiFillPlusCircle className="icon"/> 
                <h6 onClick={handleclickotwo}>
                App installation failed, how to update system information?
              </h6>
                </div>

                {hide1 && <p>
                Rhino skin maybe thick but it can be quite sensitive to sunburns
                and insect bites which is why they like wallow so much – when
                the mud dries it acts as protection from the sunburns and
                insects.
                </p>}
            </div>
            <div className="one">
            <div className="iconpm">
                <AiFillPlusCircle className="icon"/> 
                <h6 onClick={handleclickThree}>Website response taking time, how to improve?</h6>


                </div>
                {hide2 && <p>
                Get your blood tests delivered at the home collect a sample from
                management news. Get your blood tests delivered at the home
                collect a sample from management news. Get your blood tests
                delivered at the home collect a sample from management news. Get
                your blood tests delivered at the home.
                </p>}
            </div>
            <div className="one">
            <div className="iconpm">
                <AiFillPlusCircle className="icon"/>
                <h6 onClick={handleclickfour}>New update fixed all bug and issues?</h6>
 
                </div>
                {hide3 && <p>
                If you’re looking to hunt a unicorn, but don’t know where to
                begin, try Lake Superior State University in Sault Ste. Marie,
                Michigan. Since 1971, the university has issued permits to
                unicorn questers.
                </p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Frequently;
