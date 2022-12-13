import { atom } from "recoil";

export const ModalStyleState = atom({
  key: "ModalStyleState",
  default: "none",
});

export const PostionPickCountState = atom({
  key: "PostionPickCountState",
  default: 0,
});

export const GenrePickCountState = atom({
  key: "GenrePickCountState",
  default: 0,
});

export const applyFormState = atom({
  key: "applyFormState",
  default: {
    fullname: "",
    pen_name: "",
    phone_number: "",
    email: "",
    positions: [],
    genres: [],
  },
});
