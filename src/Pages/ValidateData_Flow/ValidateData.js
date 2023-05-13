import React, { useEffect, useState } from "react";
import StepsIndicator from "../../Components/Steps-Indicator";
import Button from "../../Components/Button";
import "./ValidateData.css";

const candidateInfo = {
  title: ["Fullstack Developer"],
  name: ["John Doe"],
  experience: ["2 - 3 years"],
  location: ["New York, NY"],
  education: ["B.S. Computer Science"],
  skills: [
    "React",
    "Node",
    "Express",
    "MongoDB",
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "Java",
    "C++",
  ],
};

let num = 0;

const ValidateData = () => {
  const [clickedElement, setClickedElement] = useState("not clicked");

  // useEffect(() => {}, []);

  function handelClick() {
    setClickedElement("clicked");
    console.log(clickedElement);
  }

  return (
    <div>
      <div id="#content" className="page_two">
        <h1>Your Info Below</h1>
        <div id="candidate-info">
          {/* TITLE */}
          <div id="title">
            <div>
              <button id="btn_edit" onClick={handelClick}>
                <i className="las la-edit"></i>
              </button>
              <h3>Title</h3>
            </div>
            {clickedElement === "clicked" ? (
              <div id="form_container">
                <div>
                  <p>{candidateInfo.title}</p>
                </div>
                <input type="text" />
                <button id="btn_save" onClick={handelClick}>
                  <i className="las la-save"></i>
                </button>
              </div>
            ) : (
              <p>{candidateInfo.title}</p>
            )}
          </div>
          {/* EXPERIENCE */}
          <div id="experience">
            <div>
              <button id="btn_edit" onClick={handelClick}>
                <i className="las la-edit"></i>
              </button>
              <h3>Experience</h3>
            </div>
            <p>{candidateInfo.experience}</p>
          </div>
          <div id="education">
            <div>
              <button id="btn_edit" onClick={handelClick}>
                <i className="las la-edit"></i>
              </button>
              <h3>Education</h3>
            </div>
            <p>{candidateInfo.education}</p>
          </div>
          <div id="skills">
            <div>
              <button id="btn_edit" onClick={handelClick}>
                <i className="las la-edit"></i>
              </button>
              <h3>Key Skills</h3>
            </div>
            <div id="skills-list">
              {(candidateInfo.skills &&
                candidateInfo.skills.map((skill) => (
                  <p key={num++}>{skill}</p>
                ))) || <p>None</p>}
            </div>
          </div>
        </div>
        <div id="overlay">
          <div id="candidate-resume">
            <div id="resume">
              <div>
                <button id="btn_edit" onClick={handelClick}>
                  <i className="las la-edit"></i>
                </button>
                <h3>Resume</h3>
              </div>
              <p>Resume.pdf</p>
            </div>
          </div>
        </div>
        <Button />
        <StepsIndicator stepNumber={2} />
      </div>
    </div>
  );
};

export default ValidateData;
