import axios from "axios";
import { defineStore } from "pinia";
import Auth from "../config/auth";

export const useDivisiStore = defineStore({
  id: "divisi",
  state: () => ({
    divisis: [],
  }),
  getters: {
    getDivisi(state) {
      return state.divisis;
    },
  },
  actions: {
    async fetchDivisi() {
      try {
        let request_headers = {};
        request_headers["Accept"] = "application/json";
        request_headers["Authorization"] =
          "Bearer" + " " + Auth.checkUserLoggin();
        const data = await axios.get(
          "http://localhost:9000/divisi/all-divisi?page=1&limit=5&sort=nama_divisi&order=desc",
          { headers: request_headers }
        );
        // const data = await axios.get("http://localhost:9000/divisi/all-divisi?page=1&limit=5&sort=nama_divisi&order=desc", {
        //     headers: {
        //         Authorization: "Bearer "+Auth.checkUserLoggin()
        //     }
        // })
        this.divisis = data.data;
        // await fetch(
        //     "http://localhost:9000/divisi/all-divisi?page=1&limit=5&sort=nama_divisi&order=desc"
        //   ).then((response) => response.json());
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
