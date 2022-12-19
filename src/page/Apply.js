import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import HeaderWrap from "../components/HeaderWrap";
import TopTitWrap from "../components/TopTitWrap";
import InputGroup from "../components/InputGroup";
import InputGroupTitle from "../components/InputGroupTitle";
import BottomBtn from "../components/BottomBtn";
import Modal from "../components/Modal";
import {
  ApplyFormState,
  GenrePickCountState,
  PostionPickCountState,
} from "../store/atom";

const Apply = () => {
  const [applyForm, setApplyForm] = useRecoilState(ApplyFormState);
  const resetApplyForm = useResetRecoilState(ApplyFormState);
  const resetGenrePickCountState = useResetRecoilState(GenrePickCountState);
  const resetPostionPickCountState = useResetRecoilState(PostionPickCountState);
  const [fileData, setFileData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    resetApplyForm();
    resetGenrePickCountState();
    resetPostionPickCountState();
  }, []);

  const checkValid = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData();
      for (let i in applyForm) {
        formData.append(i, applyForm[i]);
      }
      formData.append("files", fileData);
      for (let i of formData.entries()) {
        console.log(i);
      }
      // const url = "192.168.1.61:8000/apply";
      // axios.post(url, formData).then((res) => navigate("/applycomplete"));
    },
    [applyForm, fileData]
  );

  return (
    <>
      <HeaderWrap />
      <div className="sub_wrap">
        <div className="sub_cont_wrap">
          <TopTitWrap
            title="지원 하기"
            content="아이디어콘서트는 지금 웹툰작가 모집중! 좋은 웹툰을 만들어나갈 수
              있도록 함께 해주세요."
          />
          <div className="sub_cont_area">
            <form onSubmit={checkValid}>
              <div className="input_set_wrap">
                <InputGroupTitle
                  step={1}
                  content="지원서 작성하기 (* 표시는 필수 사항
                    입니다.)"
                />
                <InputGroup
                  category="position"
                  title="포지션(중복가능)"
                  require={true}
                />
                <InputGroup category="name" title="이름" require={true} />
                <InputGroup category="nickname" title="필명" require={true} />
                <InputGroup
                  category="mail"
                  title="이메일 주소"
                  require={true}
                />
                <InputGroup category="number" title="연락처" require={true} />
                <InputGroup category="country" title="거주 국가" />
                <InputGroup
                  category="genre"
                  title="선호 장르(중복가능)"
                  require={true}
                />
                <InputGroup category="intro" title="자기 소개" />
                <InputGroup
                  category="portfolio_url"
                  title="포트폴리오 사이트"
                />
                <InputGroup
                  category="file"
                  title="파일 업로드"
                  setFileData={setFileData}
                  // require={true}
                />
              </div>
              <div className="txt_box_wrap">
                <div className="txt_box">
                  <h5>유의사항</h5>
                  <ul>
                    <li>
                      지원하는 포지션에 맞는 그림 포트폴리오를 꼭 첨부하여
                      주세요.
                    </li>
                    <li>
                      포트폴리오는 jpg 또는 png 파일, pdf파일로 한 폴더에
                      압축하여 첨부해 주세요. 최대 용량은 100mb이내입니다.{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="agree_box_wrap">
                <input
                  type="checkbox"
                  name="agree_check"
                  id="agree_check"
                  required
                />
                <label htmlFor="agree_check">
                  <span>위 개인 정보수집 · 이용에 동의합니다.</span>
                </label>
              </div>
              <div className="btn_wrap">
                <BottomBtn style="btn_line" content="취소" />
                <BottomBtn
                  route="/applycomplete"
                  style="btn_color_bg"
                  content="확인"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
};

export default Apply;
