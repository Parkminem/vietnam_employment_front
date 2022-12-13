import React from "react";
import BottomBtn from "../components/BottomBtn";
import HeaderWrap from "../components/HeaderWrap";
import TopTitWrap from "../components/TopTitWrap";

const ApplyCompleteLogin = () => {
  return (
    <>
      <HeaderWrap />
      <div className="sub_wrap">
        <div className="sub_cont_wrap">
          <TopTitWrap
            title="지원 하기 완료"
            content="지원서에 기입한 아이디와 비밀번호을 아래에 넣어 지원 현황을 확인해 보세요."
          />
          <div className="sub_cont_area">
            <div className="img_deco_wrap">
              <img src="images/img/icon_line_rocket.png" alt="로켓" />
            </div>
            <form>
              <div className="login_wrap">
                <input
                  type="text"
                  placeholder="아이디를 기입해 주세요."
                  className="id_area"
                />
                <input
                  type="password"
                  placeholder="비밀빈호를 기업해 주세요."
                  className="password_area"
                />
                <div className="btn_wrap">
                  <BottomBtn
                    route="/applycomplete"
                    style="btn_color_bg"
                    content="확인"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyCompleteLogin;
