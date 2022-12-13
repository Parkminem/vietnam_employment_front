import React from "react";

const ApplyFieldPosition = ({ data }) => {
  return (
    <div class="position_detail_wrap">
      <div class="detail_number_wrap">
        <div class="detail_number">{data.num}</div>
      </div>
      <h3>{data.title}</h3>
      <div class="before_after_img_wrap">
        <ul>
          <li>
            <div class="before_after_img">
              <img src={data.imgs[0]} alt="그림 콘티" />
            </div>
            <div class="before_after_txt">{data.texts[0]}</div>
          </li>
          <li>
            <div class="before_after_img active">
              <img src={data.imgs[1]} alt="데생 콘티" />
            </div>
            <div class="before_after_txt active">{data.texts[1]}</div>
          </li>
        </ul>
      </div>
      <div class="position_detail_info">
        <p>
          {data.texts[2]}
          <br />
          {data.texts[3]}{" "}
        </p>
      </div>
    </div>
  );
};

export default ApplyFieldPosition;
