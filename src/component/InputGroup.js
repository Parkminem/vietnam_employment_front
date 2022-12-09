import React, { useState, useEffect } from "react";

const InputGroup = ({ category, require, title }) => {
  const [result, setResult] = useState();
  useEffect(() => {
    switch (category) {
      case "id":
        setResult(
          <input
            type="text"
            id="add_id"
            defaultValue=""
            placeholder="본인 확인을 위해 아이디를 기입해 주세요."
          />
        );
        break;
      case "password":
        setResult(
          <input
            type="password"
            id="add_password"
            defaultValue=""
            placeholder="비밀번호를 설정해 주세요."
          />
        );
        break;
      case "password2":
        setResult(
          <input
            type="password"
            id="add_password2"
            defaultValue=""
            placeholder="비밀번호를 다시 한번 더 기입해 주세요."
          />
        );
        break;
      case "position":
        setResult(
          <ul className="input_group_ul">
            <li>
              <input type="checkbox" id="contactChoice1" />
              <label htmlFor="contactChoice1">
                <span>LINE ART</span>
              </label>
            </li>
            <li>
              <input type="checkbox" id="contactChoice2" />
              <label htmlFor="contactChoice2">
                <span>COLOR ART</span>
              </label>
            </li>
            <li>
              <input type="checkbox" id="contactChoice3" />
              <label htmlFor="contactChoice3">
                <span>SKAETCH UP</span>
              </label>
            </li>
            <li>
              <input type="checkbox" id="contactChoice4" />
              <label htmlFor="contactChoice4">
                <span>BACKGROUND ART</span>
              </label>
            </li>
          </ul>
        );
        break;
      case "name":
        setResult(
          <input
            type="text"
            id="add_name"
            defaultValue=""
            placeholder="이름을 기입해 주세요."
          />
        );
        break;
      case "nickname":
        setResult(
          <input
            type="text"
            id="add_nickname"
            defaultValue=""
            placeholder="별명을 기입해 주세요."
          />
        );
        break;
      default:
        break;
    }
    return () => {
      setResult(null);
    };
  }, []);

  return (
    <>
      <div className="input_group">
        <div className="input_categry">
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
