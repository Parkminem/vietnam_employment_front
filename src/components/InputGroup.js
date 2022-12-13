import React, { useState, useEffect } from "react";
import PositionList from "./PositionList";

const InputGroup = ({ category, require, title, color }) => {
  const [result, setResult] = useState();
  useEffect(() => {
    if (color !== "input_categry_black") {
      switch (category) {
        case "id":
          setResult(
            <input
              type="text"
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
              id={`add_${category}`}
              defaultValue=""
              placeholder="비밀번호를 다시 한번 더 기입해 주세요."
            />
          );
          break;
        case "position":
          setResult(
            <ul className="input_group_ul">
              <PositionList count={1} content="LINE ART" />
              <PositionList count={2} content="COLOR ART" />
              <PositionList count={3} content="SKAETCH UP" />
              <PositionList count={4} content="BACKGROUND ART" />
            </ul>
          );
          break;
        case "name":
          setResult(
            <input
              type="text"
              id={`add_${category}`}
              defaultValue=""
              placeholder="이름을 기입해 주세요."
            />
          );
          break;
        case "nickname":
          setResult(
            <input
              type="text"
              id={`add_${category}`}
              defaultValue=""
              placeholder="별명을 기입해 주세요."
            />
          );
          break;
        case "mail":
          setResult(
            <input
              type="text"
              id={`add_${category}`}
              defaultValue=""
              placeholder="예) ideacon@ideaconcert.com"
            />
          );
          break;
        case "number":
          setResult(
            <input
              type="number"
              id={`add_${category}`}
              defaultValue=""
              placeholder="+84 01-000-0000"
            />
          );
          break;
        case "country":
          setResult(
            <input
              type="text"
              id={`add_${category}`}
              defaultValue=""
              placeholder="SOUTH KOREA"
            />
          );
          break;
        case "genre":
          setResult(
            <ul className="input_group_ul">
              <PositionList count={5} content="DRAMA" />
              <PositionList count={6} content="FANTASY" />
              <PositionList count={7} content="ACTION" />
              <PositionList count={8} content="ROMANCE" />
              <PositionList count={9} content="ADULT" />
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
              id={`add_${category}`}
              defaultValue=""
              placeholder="http:// "
            />
          );
          break;
        case "file":
          setResult(
            <input type="file" id={`add_${category}`} defaultValue="" />
          );
          break;
        default:
          break;
      }
    } else {
      setResult(<div class="input_cont_box_wrap">내용 보여짐</div>);
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
