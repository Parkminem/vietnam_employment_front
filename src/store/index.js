import { createStore } from "vuex";

export const changeCategoryIndex = "changeCategoryIndex";
const store = createStore({
  state() {
    return {
      categoryIndex: 1,
    };
  },
  mutations: {
    [changeCategoryIndex](state, data) {
      state.categoryIndex = data;
    },
  },
});

export default store;
