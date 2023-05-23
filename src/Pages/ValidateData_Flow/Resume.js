import React from "react";
import EditButton from "../UploadResume_Flow/EditButon";
import "./ValidateData.css";

let num = 0;
const Resume = (info) => {
    // TODO: Object destructuring 
  const candidateInfo = info.prop;
  const elements = Object.keys(candidateInfo);
  const capitalized = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  const log = (key) => {
    console.log(key);
    };


  return (
    <div>
      {elements.map((key) => (
        <div id="info_container" key={key}>
          <div className="info_header">
            {/* TODO: Open Dropdown when clicking on dropdown */}
            <i className="las la-edit" onClick={() => log(key)}></i>
            <h3>{capitalized(key)}</h3>
          </div>
          <div id="multi-list">
            {candidateInfo[key].length > 1 ? (
              candidateInfo[key].map((item) => <p key={num++}>{item}</p>)
            ) : (
              <p>{candidateInfo[key]}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resume;
// <div id="info_container">
//   <div className="info_header">
//     <EditButton />
//     <h3>{key}</h3>
//   </div>
//   <p>{candidateInfo[key]}</p>
// </div>;
