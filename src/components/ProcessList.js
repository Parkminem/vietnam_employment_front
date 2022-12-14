import React, { memo } from "react";

const ProcessList = memo(
  ({ index, processImg, processImgAlt, iConImg, content }) => {
    return (
      <>
        <li>
          <div className="process_img">
            <img src={processImg} alt={processImgAlt} />
          </div>
          <div className="icon_run_img">
            <img src={iConImg} alt="아콘이 사진" />
          </div>
          <span>
            {index}. {content}
          </span>
        </li>
      </>
    );
  }
);

export default ProcessList;
