import { createStore } from "vuex";

export const CHANGEAPPLYFORM = "changeApplyForm";
export const CHANGECATEGORYINDEX = "changeCategoryIndex";
export const RESETAPPLY = "resetApply";
export const ISMODAL = "isModal";
export const ATTACHFILE = "attachFile";
export const ONSPINNER = "onSpinner";

const store = createStore({
  state() {
    return {
      categoryIndex: 1,
      spinnerShow: false,
      modalShow: "none",
      applyForm: {
        full_name: "",
        eng_name:"",
        pen_name: "",
        phone_number: "",
        email: "",
        region: "",
        positions: [],
        genres: [],
        about: "",
        portfolio: "",
        files: undefined,
        status: null,
      },
    };
  },
  mutations: {
    [CHANGECATEGORYINDEX](state, data) {
      state.categoryIndex = data;
    },
    [CHANGEAPPLYFORM](state, data) {
      if (typeof state.applyForm[data[0]] === typeof []) {
        state.applyForm[data[0]] = data[1].split(",");
      } else {
        state.applyForm[data[0]] = data[1];
      }
    },
    [RESETAPPLY](state) {
      state.applyForm = {
        full_name: "",
        eng_name:"",
        pen_name: "",
        phone_number: "",
        email: "",
        region: "",
        positions: [],
        genres: [],
        about: "",
        portfolio: "",
        files: null,
        status: null,
      };
    },
    [ISMODAL](state, data) {
      if (data) {
        state.modalShow = "none";
      } else {
        state.modalShow = state.modalShow === "none" ? "flex" : "none";
      }
    },
    [ATTACHFILE](state, file) {
      state.applyForm.files = file;
    },
    [ONSPINNER](state) {
      state.spinnerShow = !state.spinnerShow;
    },
  },
});

export default store;
