import React from "react";

const InputGroupTitle = ({ step, content }) => {
  return (
    <>
      <p>
        <span>STEP{step < 10 ? `0${step}` : step}.</span> {content}
      </p>
    </>
  );
};

export default InputGroupTitle;
