import axios from "axios";
import { defineStore } from "pinia";
import { APISettings } from "../config/api";

export const useDivisiStore = defineStore({
  id: "divisi",
  state: () => ({
    divisis: [],
    total_pages: 0,
    total_rows: 0
  }),
  getters: {
    getDivisi(state) {
      return state.divisis;
    },
  },
  actions: {
    async fetchDivisi(limit, page) {
      try {
        const data = await axios.get(
          APISettings.baseURL +
            `/divisi/all-divisi?page=${page}&limit=${limit}&sort=nama_divisi&order=asc`,
          { headers: APISettings.headers }
        );
        this.divisis = data.data.data.rows;
        this.total_pages = data.data.data.total_pages;
        this.total_rows = data.data.data.total_rows;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async postDivisi(divisi) {
      try {
        await axios.post(
          APISettings.baseURL + "/divisi/create-divisi",
          divisi,
          { headers: APISettings.headers }
        );
        this.fetchDivisi();
        document.querySelector("#btnCloseModal").click();
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
