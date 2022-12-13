import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import produce from "immer";
import {
  PostionPickCountState,
  GenrePickCountState,
  applyFormState,
} from "../store/atom";

const PositionList = ({ require, name, count, content }) => {
  const [postionPickCount, setPostionPickCount] = useRecoilState(
    PostionPickCountState
  );
  const [genrePickCount, setGenrePickCount] =
    useRecoilState(GenrePickCountState);
  const [applyForm, setApplyForm] = useRecoilState(applyFormState);

  const pickCountChange = (e) => {
    switch (e.target.name) {
      case "position":
        if (e.target.checked) {
          if (!applyForm.positions.includes(content)) {
            setPostionPickCount((v) => v + 1);
            setApplyForm(
              produce(applyForm, (draft) => {
                draft.positions.push(content);
              })
            );
          }
        } else {
          setPostionPickCount((v) => v - 1);
          setApplyForm(
            produce(applyForm, (draft) => {
              draft.positions.splice(draft.positions.indexOf(content), 1);
            })
          );
        }
        break;
      case "genre":
        if (e.target.checked) {
          setGenrePickCount((v) => v + 1);
          setApplyForm(
            produce(applyForm, (draft) => {
              draft.genres.push(content);
            })
          );
        } else {
          setGenrePickCount((v) => v - 1);
          setApplyForm(
            produce(applyForm, (draft) => {
              draft.genres.splice(draft.positions.indexOf(content), 1);
            })
          );
        }
        break;
      default:
        break;
    }
  };
  return (
    <li>
      <input
        type="checkbox"
        id={`contactChoice${count}`}
        autoFocus={true}
        name={name}
        required={name === "position" ? !postionPickCount : !genrePickCount}
        onChange={pickCountChange}
      />
      <label htmlFor={`contactChoice${count}`}>
        <span>{content}</span>
      </label>
    </li>
  );
};

export default PositionList;
