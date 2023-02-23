import axios from "axios";
import { defineStore } from "pinia";

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
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
