import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import produce from "immer";
import BottomBtn from "../components/BottomBtn";
import HeaderWrap from "../components/HeaderWrap";
import TopTitWrap from "../components/TopTitWrap";
import { useRecoilState } from "recoil";
import { ApplyFormState } from "../store/atom";

const ApplyCompleteLogin = () => {
  const [applyForm, setApplyForm] = useRecoilState(ApplyFormState);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const navigate = useNavigate();

  const userAuthenticate = useCallback(
    (e) => {
      e.preventDefault();
      const url = "http://192.168.1.17:8000/find/";
      axios
        .post(
          url,
          {
            email: email,
            full_name: name,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          setApplyForm(
            produce(applyForm, (draft) => {
              for (let i in res.data) {
                const where = i;
                // console.log(where, typeof draft[where]);
                draft[where] = res.data[i];
              }
            })
          );
          navigate("/applytrend");
        })
        .catch((err) => console.log(err));
    },
    [email, name]
  );

  return (
    <>
      <HeaderWrap />
      <div className="sub_wrap">
        <div className="sub_cont_wrap">
          <TopTitWrap
            title="지원 현황 보기"
            content="지원서에 기입한 이메일과 이름을 아래에 넣어 지원 현황을 확인해 보세요."
          />
          <div className="sub_cont_area">
            <div className="img_deco_wrap">
              <img src="images/img/icon_line_rocket.png" alt="로켓" />
            </div>
            <form onSubmit={userAuthenticate}>
              <div className="login_wrap">
                <input
                  type="email"
                  placeholder="이메일 주소를 기입해 주세요."
                  defaultValue={email}
                  className="id_area"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="이름을 기입해 주세요."
                  defaultValue={name}
                  className="password_area"
                  required
                  onChange={(e) => setName(e.target.value)}
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
