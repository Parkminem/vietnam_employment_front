import React, { useEffect, useRef } from "react";
import { useResetRecoilState } from "recoil";
import HeaderWrap from "../components/HeaderWrap";
import TopTitWrap from "../components/TopTitWrap";
import InputGroup from "../components/InputGroup";
import BottomBtn from "../components/BottomBtn";
import { ApplyFormState } from "../store/atom";

const Apply = () => {
  const resetApplyForm = useResetRecoilState(ApplyFormState);
  const isRendered = useRef(false);

  useEffect(() => {
    return () => {
      if (isRendered.current) {
        resetApplyForm();
      }
      isRendered.current = true;
    };
  }, []);
  return (
    <>
      <HeaderWrap />
      <div className="sub_wrap">
        <div className="sub_cont_wrap">
          <TopTitWrap
            title="나의 지원서"
            content="아이디어콘서트는 지금 웹툰작가 모집중! 좋은 웹툰을 만들어나갈 수 있도록 함께 해주세요."
          />
          <div className="sub_cont_area">
            <form>
              <div className="input_set_wrap">
                <InputGroup
                  category="position"
                  title="포지션(중복가능)"
                  require={true}
                  color="input_categry_black"
                />
                <InputGroup
                  category="name"
                  title="이름"
                  require={true}
                  color="input_categry_black"
                />
                <InputGroup
                  category="nickname"
                  title="별명"
                  color="input_categry_black"
                />
                <InputGroup
                  category="mail"
                  title="이메일 주소"
                  require={true}
                  color="input_categry_black"
                />
                <InputGroup
                  category="number"
                  title="연락처"
                  require={true}
                  color="input_categry_black"
                />
                <InputGroup
                  category="country"
                  title="거주 국가"
                  color="input_categry_black"
                />
                <InputGroup
                  category="genre"
                  title="선호 장르(중복가능)"
                  require={true}
                  color="input_categry_black"
                />
                <InputGroup
                  category="intro"
                  title="자기 소개"
                  color="input_categry_black"
                />
                <InputGroup
                  category="portfolio_url"
                  title="포트폴리오 사이트"
                  color="input_categry_black"
                />
                <InputGroup
                  category="file"
                  title="파일 업로드"
                  require={true}
                  color="input_categry_black"
                />
              </div>
              <div className="txt_box_wrap mgt30">
                <div className="comment">채용 담당자 코멘트</div>
                <div className="txt_box">
                  <p>
                    죄송합니다. 아직 담당자가 확인을 하지 않았습니다. 빠른 시일
                    내에 검토하여 결과를 말씀드리겠습니다.
                  </p>
                </div>
              </div>
              <div className="btn_wrap">
                <BottomBtn route="/" style="btn_color_bg" content="메인가기" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
