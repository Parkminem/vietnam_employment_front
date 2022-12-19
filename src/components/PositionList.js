import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import produce from "immer";
import {
  PostionPickCountState,
  GenrePickCountState,
  ApplyFormState,
} from "../store/atom";

const PositionList = ({ name, count, content }) => {
  const [postionPickCount, setPostionPickCount] = useRecoilState(
    PostionPickCountState
  );
  const [genrePickCount, setGenrePickCount] =
    useRecoilState(GenrePickCountState);
  const [applyForm, setApplyForm] = useRecoilState(ApplyFormState);

  const pickCountChange = useCallback(
    (e) => {
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
    },
    [postionPickCount, genrePickCount, applyForm]
  );
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
