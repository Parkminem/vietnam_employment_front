import React from "react";
import styled from "styled-components";

const SubTxtP = styled.p`
  white-space: pre-line;
`;

const TopTitWrap = ({ title, content }) => {
  return (
    <>
      <div className="top_tit_wrap">
        <h2 className="tit">{title}</h2>
        <SubTxtP className="sub_txt">{content}</SubTxtP>
      </div>
    </>
  );
};

export default TopTitWrap;
