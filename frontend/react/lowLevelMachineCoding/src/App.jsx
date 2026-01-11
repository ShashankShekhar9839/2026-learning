import { useState } from "react";
import "./App.css";
import MultiStepper from "./machineCodingQuestions/multiStepper/MultiStepper";
import SwitchCase from "./machineCodingQuestions/switchCase/SwitchCase";

function App() {
  return (
    <>
      <div className="app">
        <h2>All Machine Coding Questions Will be Here</h2>
        <MultiStepper />
        <SwitchCase
          defaultValue="left"
          options={[
            { label: "Active", value: "left" },
            { label: "Inactive", value: "right" },
            { label: "Something", value: "something" },
          ]}
        />
      </div>
    </>
  );
}

export default App;
