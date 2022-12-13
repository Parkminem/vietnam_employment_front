import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ModalStyleState } from "../store/atom";

const PageNav = ({ bgColor, route, name }) => {
  const [modalStyle, setModalStyle] = useRecoilState(ModalStyleState);
  const setHide = () => {
    setModalStyle("none");
  };
  return (
    <>
      <li className={bgColor}>
        <Link to={route} onClick={setHide}>
          {name}
        </Link>
      </li>
    </>
  );
};

export default PageNav;
