import { createStore } from "vuex";

export const CHANGECATEGORYINDEX = "changeCategoryIndex";
export const RESETAPPLY = "resetApply";
export const ISMODAL = "isModal";
export const ATTACHFILE = "attachFile";

const store = createStore({
  state() {
    return {
      categoryIndex: 1,
      modalShow: "none",
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
    [CHANGECATEGORYINDEX](state, data) {
      state.categoryIndex = data;
    },
    [RESETAPPLY](state) {
      state.applyForm = {
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
      };
    },
    [ISMODAL](state) {
      state.modalShow = state.modalShow === "none" ? "flex" : "none";
    },
    [ATTACHFILE](state, file) {
      state.applyForm.files = file;
    },
  },
});

export default store;
