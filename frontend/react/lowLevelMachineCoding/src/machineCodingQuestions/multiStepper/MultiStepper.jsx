// multi stepper using next and previous button done

import React, { useState } from "react";
import "./style.css";

function MultiStepper({ numberOfSteps = 5 }) {
  const [activeStep, setActiveStep] = useState(1);

  const steps = Array.from({ length: numberOfSteps });

  const handleNext = () => {
    if (activeStep < numberOfSteps) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 1) {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <div className="container">
      <p>MultiStepper</p>

      <div className="stepper">
        {steps.map((_, index) => (
          <React.Fragment key={index}>
            {/* Dot */}
            <span
              className={`dot ${
                index + 1 <= activeStep ? "dot-active" : "dot-inactive"
              }`}
            />

            {/* Line (not after last dot) */}
            {index < numberOfSteps - 1 && (
              <span
                className={`line ${
                  activeStep > index + 1 ? "line-active" : "line-inactive"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="actions">
        <button onClick={handlePrev} disabled={activeStep === 1}>
          Prev
        </button>
        <button onClick={handleNext} disabled={activeStep === numberOfSteps}>
          Next
        </button>
      </div>
    </div>
  );
}

export default MultiStepper;
