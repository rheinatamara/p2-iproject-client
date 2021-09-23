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
    detailPost: [],
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
    SET_DETAILPAGE(state, payload) {
      state.detailPost = payload;
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
    fetchById(context, payload) {
      return axios.get(`${baseUrl}/posts/${payload}`, {
        headers: { access_token: localStorage.getItem("access_token") },
      });
    },
  },
  modules: {},
});
