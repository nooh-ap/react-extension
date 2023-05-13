import React from "react";
import DragAndDrop from "./DragAndDrop";
import StepsIndicator from "../../Components/Steps-Indicator";
import Button from "../../Components/Button";
import "./UploadResume.css";

const UploadResume = () => {
  return (
    <div>
      <div id="content">
        <h1>Upload Your Resume</h1>
        <p>We'll take care of the rest 💯</p>
        <DragAndDrop />
        <Button />
        <StepsIndicator />
      </div>
    </div>
  );
};

export default UploadResume;
