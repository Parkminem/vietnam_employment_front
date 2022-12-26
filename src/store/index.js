import { createStore } from "vuex";

export const changeCategoryIndex = "changeCategoryIndex";
export const CHANGEAPPLYFORM = "changeApplyForm";

const store = createStore({
  state() {
    return {
      categoryIndex: 1,
      applyForm: {
        full_name: "",
        pen_name: "",
        phone_number: "",
        email: "",
        region: "",
        positions: [],
        genres: [],
        about: "",
        portfolio: "",
        files: undefined,
      },
    };
  },
  mutations: {
    [changeCategoryIndex](state, data) {
      state.categoryIndex = data;
    },
    [CHANGEAPPLYFORM](state, data) {
      if (typeof state.applyForm[data[0]] === typeof []) {
        state.applyForm[data[0]] = data[1].split(",");
      } else {
        state.applyForm[data[0]] = data[1];
      }
    },
  },
});

export default store;
