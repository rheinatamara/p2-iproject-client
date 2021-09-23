import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const baseUrl = "http://localhost:3000";
import axios from "axios";

export default new Vuex.Store({
  state: {
    myProfile: [],
    default_picture: "",
    default_background: "",
    hasPicture: false,
  },
  mutations: {
    SET_MYPROFILE(state, payload) {
      state.myProfile = payload;
    },
    SET_DEFAULTPICTURE(state, payload) {
      state.default_picture = payload;
    },
    SET_HASPICTURE(state, payload) {
      state.hasPicture = payload;
    },
  },
  actions: {
    submitLogin(context, payload) {
      return axios.post(`${baseUrl}/login`, payload);
    },
    submitRegister(context, payload) {
      return axios.post(`${baseUrl}/register`, payload);
    },
    fetchProfile() {
      return axios.get(`${baseUrl}/myProfile`, {
        headers: { access_token: localStorage.getItem("access_token") },
      });
    },
  },
  modules: {},
});
