import React from "react";

const MainBtmImgWrap = ({ img, imgAlt, marginTop, marginBottom }) => {
  return (
    <>
      <div
        className={`text_img_wrap ${marginTop && `mgt${marginTop}`} ${
          marginBottom && `mgb${marginBottom}`
        }`}
      >
        <img src={img} alt={imgAlt} />
      </div>
    </>
  );
};

export default MainBtmImgWrap;
