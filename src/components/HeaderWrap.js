import React from "react";
import { Link } from "react-router-dom";
import PageNav from "./PageNav";
import Apply from "../page/Apply";

const HeaderWrap = () => {
  return (
    <>
      <div className="header_wrap">
        <div className="header_con_area">
          <ul className="logo_wrap">
            <li>
              <a href="PL-01-01_메인.html">
                <img src="images/layout/space_logo.png" alt="스페이스 로고" />
              </a>
            </li>
            <li className="ideacon_logo">
              <a href="http://ideaconcert.com/" target="_blank">
                <img
                  src="images/layout/ideacon_logo.png"
                  alt="아이디어콘서트 로고"
                />
              </a>
            </li>
          </ul>
          <div className="txt_wrap">
            <div className="txt_img">
              <img src="images/img/idea-space.png" alt="스페이스 문구" />
            </div>
            <h2 className="font_current">
              <span>HELLO,</span>WEBTOONIST
            </h2>
            <p>
              웹툰과 콘텐츠를 사랑하는 동료들이 함께합니다. <br />
              K-웹툰, 성공의 중심에서 함께 미래를 그려나갑니다.
            </p>
          </div>
        </div>
      </div>
      <div data-aos="flip-left" data-aos-duration="700" className="menu_wrap">
        <ul className="right_menu">
          <PageNav bgColor="bg_yellow" route="/applyfield" name="지원 분야" />
          <PageNav bgColor="bg_blue" route="/apply" name="지원 하기" />
          <PageNav bgColor="bg_blue" route="/applytrend" name="지원 현황" />
          <PageNav bgColor="bg_darkgrey" route="/qna" name="QnA" />
        </ul>
      </div>
    </>
  );
};

export default HeaderWrap;
