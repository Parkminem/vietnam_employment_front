import React from "react";
import BottomBtn from "./BottomBtn";
import InputGroup from "./InputGroup";
import InputGroupTitle from "./InputGroupTitle";

const SubForm = () => {
  return (
    <>
      <div className="input_set_wrap">
        <InputGroupTitle
          step={1}
          content="지원 현황 조회를 위해 아이디와 비밀번호를
                  설정해 주세요."
        />
        <InputGroup category="id" title="아이디" />
        <InputGroup category="password" title="비밀번호" />
        <InputGroup category="password2" title="비밀번호 확인" />
      </div>
      <div className="input_set_wrap">
        <InputGroupTitle
          step={2}
          content="지원서 작성하기 (* 표시는 필수 사항
                    입니다.)"
        />
        <InputGroup
          category="position"
          title="포지션(중복가능)"
          require={true}
        />
        <InputGroup category="name" title="이름" require={true} />
        <InputGroup category="nickname" title="별명" />
        <InputGroup category="mail" title="이메일 주소" require={true} />
        <InputGroup category="number" title="연락처" require={true} />
        <InputGroup category="country" title="거주 국가" />
        <InputGroup
          category="genre"
          title="선호 장르(중복가능)"
          require={true}
        />
        <InputGroup category="intro" title="자기 소개" />
        <InputGroup category="portfolio_url" title="포트폴리오 사이트" />
        <InputGroup category="file" title="파일 업로드" require={true} />
      </div>
      <div className="txt_box_wrap">
        <div className="txt_box">
          <h5>유의사항</h5>
          <ul>
            <li>
              지원하는 포지션에 맞는 그림 포트폴리오를 꼭 첨부하여 주세요.
            </li>
            <li>
              포트폴리오는 jpg 또는 png 파일, pdf파일로 한 폴더에 압축하여
              첨부해 주세요. 최대 용량은 100mb이내입니다.{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="agree_box_wrap">
        <input type="checkbox" id="agree_check" />
        <label htmlFor="agree_check">
          <span>위 개인 정보수집 · 이용에 동의합니다.</span>
        </label>
      </div>
      <div className="btn_wrap">
        <BottomBtn route="/" style="btn_line" content="취소" />
        <BottomBtn route="/applycomplete" style="btn_color_bg" content="확인" />
        {/* <a
                  href="PL-03-02_지원취소하기.html"
                  className="btn_basic btn_line"
                >
                  취소
                </a>
                <a
                  href="PL-03-03_지원하기완료.html"
                  className="btn_basic btn_color_bg"
                >
                  확인
                </a> */}
      </div>
    </>
  );
};

export default SubForm;
