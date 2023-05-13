import React, { useEffect } from "react";
import "./Styles/steps-indicator.css";

const StepsIndicator = (stepNumber) => {
  useEffect(() => {
    for (let i = 1; i <= stepNumber.stepNumber; i++) {
      const step = document.querySelector(`.step${i}`);
      step.classList.add("active");
    }
  }, [stepNumber.stepNumber]);

  return (
    <div>
      <div id="indicator-container">
        <div className="step step1"></div>
        <div className="step step2"></div>
        <div className="step step3"></div>
      </div>
    </div>
  );
};

export default StepsIndicator;
