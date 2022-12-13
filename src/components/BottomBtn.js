import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ModalStyleState } from "../store/atom";

const BottomBtn = ({ route, style, content }) => {
  const [modalStyle, setModalStyle] = useRecoilState(ModalStyleState);
  const isCancel = (e) => {
    if (e.target.text === `취소`) {
      modalStyle === "none" && setModalStyle("flex");
      modalStyle === "flex" && setModalStyle("none");
    } else {
      setModalStyle("none");
    }
  };
  return (
    <>
      <Link to={route} className={`btn_basic ${style}`} onClick={isCancel}>
        {content}
      </Link>
    </>
  );
};

export default BottomBtn;
