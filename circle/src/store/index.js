import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const baseUrl = "http://localhost:3000";
import axios from "axios";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    submitLogin(context, payload) {
      return axios.post(`${baseUrl}/login`, payload);
    },
    submitRegister(context, payload) {
      return axios.post(`${baseUrl}/register`, payload);
    },
  },
  modules: {},
});
