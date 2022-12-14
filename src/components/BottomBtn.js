import React, { useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ModalStyleState } from "../store/atom";

const BottomBtn = memo(({ route, style, content }) => {
  const [modalStyle, setModalStyle] = useRecoilState(ModalStyleState);

  const isCancel = useCallback(
    (e) => {
      if (e.target.text === `취소`) {
        modalStyle === "none" && setModalStyle("flex");
        modalStyle === "flex" && setModalStyle("none");
      } else {
        setModalStyle("none");
      }
    },
    [modalStyle]
  );

  if (content === "확인") {
    return (
      <>
        <button type="submit" className={`btn_basic ${style}`}>
          {content}
        </button>
      </>
    );
  } else
    return (
      <>
        <Link to={route} className={`btn_basic ${style}`} onClick={isCancel}>
          {content}
        </Link>
      </>
    );
});

export default BottomBtn;
