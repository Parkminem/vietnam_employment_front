import { createStore } from "vuex";

export const changeCategoryIndex = "changeCategoryIndex";

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
        files: null,
      },
    };
  },
  mutations: {
    [changeCategoryIndex](state, data) {
      state.categoryIndex = data;
    },
  },
});

export default store;
