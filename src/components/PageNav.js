import React, { useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ModalStyleState } from "../store/atom";

const PageNav = memo(({ bgColor, route, name }) => {
  const [modalStyle, setModalStyle] = useRecoilState(ModalStyleState);
  const setHide = useCallback(() => {
    setModalStyle("none");
  }, []);
  return (
    <>
      <li className={bgColor}>
        <Link to={route} onClick={setHide}>
          {name}
        </Link>
      </li>
    </>
  );
});

export default PageNav;
