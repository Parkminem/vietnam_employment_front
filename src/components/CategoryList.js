import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { CategoryIndexState } from "../store/atom";

const CategoryList = ({ className, content, index }) => {
  const [positionId, setPositionId] = useRecoilState(CategoryIndexState);
  const onClickPostion = useCallback(
    (e) => {
      setPositionId(e.target.id);
      [...e.target.parentNode.children].map((li) => {
        li.className = "";
      });
      e.target.className = "active";
    },
    [positionId]
  );

  return (
    <>
      <li
        className={className && className}
        id={index}
        onClick={onClickPostion}
      >
        {content}
      </li>
    </>
  );
};

export default CategoryList;
