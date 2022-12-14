import React, { useState, useEffect, useCallback } from "react";
import produce from "immer";
import { useRecoilState, useResetRecoilState } from "recoil";
import PositionList from "./PositionList";
import { ApplyFormState } from "../store/atom";

const InputGroup = ({ category, require, title, color }) => {
  const [result, setResult] = useState();
  const [applyForm, setApplyForm] = useRecoilState(ApplyFormState);

  const inputChange = useCallback(
    (e) => {
      let where;
      switch (category) {
        case "name":
          where = "full_name";
          break;
        // case "nickname":
        //   where = "pen_name";
        //   break;
        case "mail":
          where = "email";
          break;
        case "number":
          where = "phone_number";
          break;
        default:
          where = null;
          break;
      }
      where &&
        setApplyForm(
          produce(applyForm, (draft) => {
            draft[where] = e.target.value;
          })
        );
    },
    [applyForm]
  );

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
              <PositionList name="position" count={1} content="LINE ART" />
              <PositionList name="position" count={2} content="COLOR ART" />
              <PositionList name="position" count={3} content="SKAETCH UP" />
              <PositionList
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
              defaultValue={applyForm.full_name}
              placeholder="이름을 기입해 주세요."
              onChange={inputChange}
            />
          );
          break;
        // case "nickname":
        //   setResult(
        //     <input
        //       type="text"
        //       required={require}
        //       id={`add_${category}`}
        //       defaultValue={applyForm.pen_name}
        //       placeholder="별명을 기입해 주세요."
        //       onChange={inputChange}
        //     />
        //   );
        //   break;
        case "mail":
          setResult(
            <input
              type="email"
              required={require}
              id={`add_${category}`}
              defaultValue={applyForm.email}
              placeholder="예) ideacon@ideaconcert.com"
              onChange={inputChange}
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
              onChange={inputChange}
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
              <PositionList name="genre" count={5} content="DRAMA" />
              <PositionList name="genre" count={6} content="FANTASY" />
              <PositionList name="genre" count={7} content="ACTION" />
              <PositionList name="genre" count={8} content="ROMANCE" />
              <PositionList name="genre" count={9} content="ADULT" />
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
              {applyForm.positions.map((v, i) =>
                i === applyForm.positions.length - 1 ? `${v} ` : `${v}, `
              )}
            </div>
          );
          break;
        case "name":
          setResult(
            <div className="input_cont_box_wrap">{applyForm.full_name}</div>
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
            <div className="input_cont_box_wrap">
              {applyForm.genres.map((v, i) =>
                i === applyForm.genres.length - 1 ? `${v} ` : `${v}, `
              )}
            </div>
          );
          break;
        default:
          setResult(<div className="input_cont_box_wrap">내용 보여짐</div>);
          break;
      }
    }
  }, [applyForm]);

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
