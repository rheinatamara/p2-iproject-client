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
    allData: [],
    userHasPicture: false,
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
    SET_ALLDATA(state, payload) {
      state.allData = payload;
    },
    SET_USEREHASPICTURE(state, payload) {
      state.userHasPicture = payload;
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
    fetchExplore() {
      return axios.get(`${baseUrl}/posts`, {
        headers: { access_token: localStorage.getItem("access_token") },
      });
    },
    addPost(context, payload) {
      const form = new FormData();
      form.append("text", payload.text);

      form.append("image_url", payload.image_url);
      axios.post(`${baseUrl}/posts`, form, {
        headers: { access_token: localStorage.getItem("access_token") },
      });
      return axios.post(`${baseUrl}/posts`, payload, {
        headers: { access_token: localStorage.getItem("access_token") },
      });
    },
    editPost(context, payload) {
      const form = new FormData();
      form.append("description", payload.description);
      form.append("profile_image_url", payload.profile_image_url);
      axios.put(`${baseUrl}/myProfile`, form, {
        headers: { access_token: localStorage.getItem("access_token") },
      });
    },
  },
  modules: {},
});
