import React, { useEffect, useState } from "react";
import StepsIndicator from "../../Components/Steps-Indicator";
import Button from "../../Components/NextPage_Button";
import "./ValidateData.css";
import Resume from "./Resume";

const otherTitles = [
  "Software Engineer",
  "Software Developer",
  "C++ Developer",
  "Java Developer",
  "AWS Architect",
];

const candidateInfo = {
  name: ["John Doe"],
  title: ["Fullstack Developer"],
  experience: ["2 - 3 years"],
  location: ["New York, NY", "Remote"],
  education: ["B.S. Computer Science"],
  skills: [
    "React",
    "Node.js",
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
          <Resume prop={candidateInfo} />
        </div>
        <Button />
        <StepsIndicator stepNumber={2} />
      </div>
    </div>
  );
};

export default ValidateData;

// <div className="title" id="info_container">
//             <div className="info_header">
//               <button id="btn_edit" onClick={openDropddown}>
//                 <i className="las la-edit"></i>
//               </button>
//               <h3>Title</h3>
//             </div>
//             {clickedElement === "clicked" ? (
//               <div id="form_container">
//                 <div id="form_head">
//                   <div className="form_item_pill">
//                     <p id="form_pill_text">{candidateInfo.title}</p>
//                     <i className="las la-times"></i>
//                   </div>
//                   <input type="text" />
//                   <button id="btn_save" onClick={closeDropdown}>
//                     <i className="las la-check"></i>
//                   </button>
//                 </div>

//                 <div className="dropdownlist_container">
//                   <h5>Select an option or create one</h5>

//                   {otherTitles?.map((title) => (
//                     <li key={num++}>{title}</li>
//                   )) || <p>None</p>}
//                 </div>
//               </div>
//             ) : (
//               <p>{candidateInfo.title}</p>
//             )}
//           </div>
