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

export const ApplyFormState = atom({
  key: "applyFormState",
  default: {
    full_name: "",
    // pen_name: "",
    phone_number: "",
    email: "",
    positions: [],
    genres: [],
  },
});

export const CategoryIndexState = atom({
  key: "CategoryIndexState",
  default: 0,
});
