import React, { useState, useEffect } from "react";
import produce from "immer";
import PositionList from "./PositionList";
import { useRecoilState } from "recoil";
import { applyFormState } from "../store/atom";

const InputGroup = ({ category, require, title, color }) => {
  const [result, setResult] = useState();
  const [applyForm, setApplyForm] = useRecoilState(applyFormState);

  useEffect(() => {
    if (color !== "input_categry_black") {
      switch (category) {
        case "id":
          setResult(
            <input
              type="text"
              required={require}
              id={`add_${category}`}
              defaultValue=""
              placeholder="본인 확인을 위해 아이디를 기입해 주세요."
            />
          );
          break;
        case "password":
          setResult(
            <input
              type="password"
              required={require}
              id={`add_${category}`}
              defaultValue=""
              placeholder="비밀번호를 설정해 주세요."
            />
          );
          break;
        case "password2":
          setResult(
            <input
              type="password"
              required={require}
              id={`add_${category}`}
              defaultValue=""
              placeholder="비밀번호를 다시 한번 더 기입해 주세요."
            />
          );
          break;
        case "position":
          setResult(
            <ul className="input_group_ul">
              <PositionList
                require={require}
                name="position"
                count={1}
                content="LINE ART"
              />
              <PositionList
                require={require}
                name="position"
                count={2}
                content="COLOR ART"
              />
              <PositionList
                require={require}
                name="position"
                count={3}
                content="SKAETCH UP"
              />
              <PositionList
                require={require}
                name="position"
                count={4}
                content="BACKGROUND ART"
              />
            </ul>
          );
          break;
        case "name":
          setResult(
            <input
              type="text"
              required={require}
              id={`add_${category}`}
              defaultValue={applyForm.fullname}
              placeholder="이름을 기입해 주세요."
              onChange={(e) =>
                setApplyForm(
                  produce(applyForm, (draft) => {
                    draft.fullname = e.target.value;
                  })
                )
              }
            />
          );
          break;
        case "nickname":
          setResult(
            <input
              type="text"
              required={require}
              id={`add_${category}`}
              defaultValue={applyForm.pen_name}
              placeholder="별명을 기입해 주세요."
              onChange={(e) =>
                setApplyForm(
                  produce(applyForm, (draft) => {
                    draft.pen_name = e.target.value;
                  })
                )
              }
            />
          );
          break;
        case "mail":
          setResult(
            <input
              type="email"
              required={require}
              id={`add_${category}`}
              defaultValue={applyForm.email}
              placeholder="예) ideacon@ideaconcert.com"
              onChange={(e) =>
                setApplyForm(
                  produce(applyForm, (draft) => {
                    draft.email = e.target.value;
                  })
                )
              }
            />
          );
          break;
        case "number":
          setResult(
            <input
              type="tel"
              pattern="[0-9]+"
              required={require}
              id={`add_${category}`}
              defaultValue={applyForm.phone_number}
              placeholder={`"-"없이 입력해 주세요`}
              onChange={(e) =>
                setApplyForm(
                  produce(applyForm, (draft) => {
                    draft.phone_number = e.target.value;
                  })
                )
              }
            />
          );
          break;
        case "country":
          setResult(
            <input
              type="text"
              required={require}
              id={`add_${category}`}
              defaultValue=""
              placeholder="SOUTH KOREA"
            />
          );
          break;
        case "genre":
          setResult(
            <ul className="input_group_ul">
              <PositionList
                name="genre"
                require={require}
                count={5}
                content="DRAMA"
              />
              <PositionList
                name="genre"
                require={require}
                count={6}
                content="FANTASY"
              />
              <PositionList
                name="genre"
                require={require}
                count={7}
                content="ACTION"
              />
              <PositionList
                name="genre"
                require={require}
                count={8}
                content="ROMANCE"
              />
              <PositionList
                name="genre"
                require={require}
                count={9}
                content="ADULT"
              />
            </ul>
          );
          break;
        case "intro":
          setResult(
            <div className="intro_txtarea">
              <textarea></textarea>
            </div>
          );
          break;
        case "portfolio_url":
          setResult(
            <input
              type="text"
              required={require}
              id={`add_${category}`}
              defaultValue=""
              placeholder="http:// "
            />
          );
          break;
        case "file":
          setResult(
            <input
              type="file"
              required={require}
              id={`add_${category}`}
              defaultValue=""
            />
          );
          break;
        default:
          break;
      }
    } else {
      switch (category) {
        case "position":
          setResult(
            <div className="input_cont_box_wrap">
              {applyForm.positions.length}
            </div>
          );
          break;
        case "name":
          setResult(
            <div className="input_cont_box_wrap">{applyForm.fullname}</div>
          );
          break;
        case "nickname":
          setResult(
            <div className="input_cont_box_wrap">{applyForm.pen_name}</div>
          );
          break;
        case "mail":
          setResult(
            <div className="input_cont_box_wrap">{applyForm.email}</div>
          );
          break;
        case "number":
          setResult(
            <div className="input_cont_box_wrap">{applyForm.phone_number}</div>
          );
          break;
        case "genre":
          setResult(
            <div className="input_cont_box_wrap">{applyForm.genres.length}</div>
          );
          break;
        default:
          setResult(<div className="input_cont_box_wrap">내용 보여짐</div>);
          break;
      }
    }

    return () => {
      setResult(null);
    };
  }, []);

  return (
    <>
      <div className="input_group">
        <div className={`input_categry ${color && color}`}>
          <label htmlFor={`add_${category}`}>
            {require && `*`}
            {title}
          </label>
        </div>
        {result}
      </div>
    </>
  );
};

export default InputGroup;
