import { useState } from "react";
import "./App.css";
import MultiStepper from "./machineCodingQuestions/multiStepper/MultiStepper";
import SwitchCase from "./machineCodingQuestions/switchCase/SwitchCase";
import InfiniteScroll from "./machineCodingQuestions/infiniteScroll/InfiniteScroll";
import InfiniteScrollUsingIntersectionObserver from "./machineCodingQuestions/infiniteScroll/InfiniteScrollUsingIntersectionObserver";

function App() {
  const questions = [
    <MultiStepper />,
    <SwitchCase
      defaultValue="left"
      options={[
        { label: "Active", value: "left" },
        { label: "Inactive", value: "right" },
        { label: "Something", value: "something" },
      ]}
    />,
    <InfiniteScroll />,
    <InfiniteScrollUsingIntersectionObserver />,
  ];

  return (
    <>
      <div className="app">
        <h2>All Machine Coding Questions Will be Here</h2>
        {questions.map((component, index) => (
          <div className="component-container" key={index}>
            {component}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
