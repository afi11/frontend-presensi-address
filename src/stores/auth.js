import axios from "axios";
import { defineStore } from "pinia";
import Auth from "../config/auth";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    loading: false,
    token: null,
  }),
  getters: {
    getToken(state) {
      return state.token;
    },
  },
  actions: {
    async postLogin(user) {
      try {
        const data = await axios.post("http://localhost:9000/auth/login", user);
        this.token = data.data.token;
        Auth.setToken(this.token, data.data.expired_at);
        window.location.reload();
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
