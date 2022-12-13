import React from "react";

const PositionList = ({ count, content }) => {
  return (
    <li>
      <input type="checkbox" id={`contactChoice${count}`} />
      <label htmlFor={`contactChoice${count}`}>
        <span>{content}</span>
      </label>
    </li>
  );
};

export default PositionList;
