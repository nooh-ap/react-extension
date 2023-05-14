import React, { useEffect, useState } from "react";
import StepsIndicator from "../../Components/Steps-Indicator";
import Button from "../../Components/Button";
import "./ValidateData.css";

const otherTitles = [
  "Software Engineer",
  "Software Developer",
  "C++ Developer",
  "Java Developer",
  "AWS Architect",
];

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

  useEffect(() => {}, []);

  const openDropddown = () => {
    clickedElement === "clicked"
      ? setClickedElement([])
      : setClickedElement("clicked");
  };

  const closeDropdown = () => {
    setClickedElement([]);
    console.log(clickedElement);
  };

  return (
    <div>
      <div id="#content" className="page_two">
        <h1>Your Info Below</h1>
        <div id="candidate-info">
          {/* TITLE */}
          <div className="title" id="info_container">
            <div className="info_header">
              <button id="btn_edit" onClick={openDropddown}>
                <i className="las la-edit"></i>
              </button>
              <h3>Title</h3>
            </div>
            {clickedElement === "clicked" ? (
              <div id="form_container">
                <div id="form_head">
                  <div className="form_item_pill">
                    <p id="form_pill_text">{candidateInfo.title}</p>
                    <i className="las la-times"></i>
                  </div>
                  <input type="text" />
                  <button id="btn_save" onClick={closeDropdown}>
                  <i class="las la-check"></i>
                  </button>
                </div>

                <div className="dropdownlist_container">
                  <h5>Select an option or create one</h5>

                  {
                    otherTitles?.map((title) => (
                      <li key={num++}>{title}</li>
                    )) || <p>None</p>
                    }
                </div>
              </div>
            ) : (
              <p>{candidateInfo.title}</p>
            )}
          </div>
          {/* EXPERIENCE */}
          <div id="info_container" className="experience">
            <div className="info_header">
              <button id="btn_edit" onClick={openDropddown}>
                <i className="las la-edit"></i>
              </button>
              <h3>Experience</h3>
            </div>
            <p>{candidateInfo.experience}</p>
          </div>
          {/* EDUCATION */}
          <div id="info_container" className="education">
            <div className="info_header">
              <button id="btn_edit" onClick={openDropddown}>
                <i className="las la-edit"></i>
              </button>
              <h3>Education</h3>
            </div>
            <p>{candidateInfo.education}</p>
          </div>
          <div className="skills" id="info_container">
            <div className="info_header">
              <button id="btn_edit" onClick={openDropddown}>
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

        <Button />
        <StepsIndicator stepNumber={2} />
      </div>
    </div>
  );
};

export default ValidateData;
