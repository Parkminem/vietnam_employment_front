import React from "react";
import TopTitWrap from "./TopTitWrap";
import InputGroup from "./InputGroup";
import InputGroupTitle from "./InputGroupTitle";

const SubWrap = () => {
  return (
    <>
      <div className="sub_wrap">
        <div className="sub_cont_wrap">
          <TopTitWrap
            title="지원 하기"
            content="아이디어콘서트는 지금 웹툰작가 모집중! 좋은 웹툰을 만들어나갈 수
              있도록 함께 해주세요."
          />
          <div className="sub_cont_area">
            <form>
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
                <div className="input_group">
                  <div className="input_categry">
                    <label htmlFor="add_mail">*이메일 주소</label>
                  </div>
                  <input
                    type="text"
                    id=""
                    defaultValue="add_mail"
                    placeholder="예) ideacon@ideaconcert.com"
                  />
                </div>
                <div className="input_group">
                  <div className="input_categry">
                    <label htmlFor="add_number">*연락처</label>
                  </div>
                  <input
                    type="number"
                    id="add_number"
                    defaultValue=""
                    placeholder="+84 01-000-0000"
                  />
                </div>
                <div className="input_group">
                  <div className="input_categry">
                    <label htmlFor="add_country">거주 국가</label>
                  </div>
                  <input
                    type="text"
                    id="add_country"
                    defaultValue=""
                    placeholder="SOUTH KOREA"
                  />
                </div>
                <div className="input_group">
                  <div className="input_categry">
                    <label htmlFor="add_genre">*선호 장르(중복가능)</label>
                  </div>
                  <ul className="input_group_ul">
                    <li>
                      <input type="checkbox" id="contactChoice5" />
                      <label htmlFor="contactChoice5">
                        <span>DRAMA</span>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="contactChoice6" />
                      <label htmlFor="contactChoice6">
                        <span>FANTASY</span>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="contactChoice7" />
                      <label htmlFor="contactChoice7">
                        <span>ACTION</span>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="contactChoice8" />
                      <label htmlFor="contactChoice8">
                        <span>ROMANCE</span>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="contactChoice9" />
                      <label htmlFor="contactChoice9">
                        <span>ADULT</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="input_group">
                  <div className="input_categry">
                    <label htmlFor="add_intro">자기 소개</label>
                  </div>
                  <div className="intro_txtarea">
                    <textarea></textarea>
                  </div>
                </div>
                <div className="input_group">
                  <div className="input_categry">
                    <label htmlFor="add_rortfolio_url">포트폴리오 사이트</label>
                  </div>
                  <input
                    type="text"
                    id="add_rortfolio_url"
                    defaultValue=""
                    placeholder="http:// "
                  />
                </div>
                <div className="input_group">
                  <div className="input_categry">
                    <label htmlFor="add_file">*파일 업로드</label>
                  </div>
                  <input type="file" id="add_file" defaultValue="" />
                </div>
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
                <input type="checkbox" id="agree_check" />
                <label htmlFor="agree_check">
                  <span>위 개인 정보수집 · 이용에 동의합니다.</span>
                </label>
              </div>
              <div className="btn_wrap">
                <a
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
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubWrap;
