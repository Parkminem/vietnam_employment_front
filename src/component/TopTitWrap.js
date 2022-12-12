import React from "react";

const TopTitWrap = ({ title, content }) => {
  return (
    <>
      <div className="top_tit_wrap">
        <h2 className="tit">{title}</h2>
        <p className="sub_txt">{content}</p>
      </div>
    </>
  );
};

export default TopTitWrap;
