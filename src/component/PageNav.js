import React from "react";
import { Link } from "react-router-dom";

const PageNav = ({ bgColor, route, name }) => {
  return (
    <>
      <li className={bgColor}>
        <Link to={route}>{name}</Link>
      </li>
    </>
  );
};

export default PageNav;
