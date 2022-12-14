import React, { memo } from "react";

const InputGroupTitle = memo(({ step, content }) => {
  return (
    <>
      <p>
        <span>STEP{step < 10 ? `0${step}` : step}.</span> {content}
      </p>
    </>
  );
});

export default InputGroupTitle;
