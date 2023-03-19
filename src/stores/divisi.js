import axios from "axios";
import { defineStore } from "pinia";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { APISettings } from "../config/api";

export const useDivisiStore = defineStore({
  id: "divisi",
  state: () => ({
    divisis: [],
    current_page: 1,
    page: 1,
    limit: 5,
    search: "",
    total_pages: 0,
    total_rows: 0
  }),
  getters: {
    getDivisi(state) {
      return state.divisis;
    },
  },
  actions: {
    async nextPage() {
      this.page = this.page + 1;
      this.current_page = this.page;
      this.fetchDivisi(this.limit, this.page, this.search);
    },
    async previousPage() {
      this.page = this.page - 1;
      this.current_page = this.page;
      this.fetchDivisi(this.limit, this.page, this.search);
    },
    async gotoPage(numPage){
      this.page = numPage;
      this.current_page = this.page;
      this.fetchDivisi(this.limit, this.page, this.search);
    },
    async fetchDivisi(limit, page, search) {
      try {
        const data = await axios.get(
          APISettings.baseURL +
            `/divisi/all-divisi?page=${page}&limit=${limit}&sort=nama_divisi&order=asc&search=${search}`,
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
        this.fetchDivisi(this.limit, this.page, this.search);
        document.querySelector("#btnCloseAddModal").click();
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async updateDivisi(divisi) {
      try {
        await axios.put(APISettings.baseURL + "/divisi/update-divisi/" + divisi.id, divisi, { headers: APISettings.headers });
        this.fetchDivisi(this.limit, this.page, this.search);
        document.querySelector("#btnCloseEditModal").click();
      }catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async deleteDivisi(divisi) {
      try {
        await axios.delete(APISettings.baseURL + "/divisi/delete-divisi/" + divisi.id,  { headers: APISettings.headers });
        this.fetchDivisi(this.limit, this.page, this.search);
        Swal.fire("Deleted!", "Your data has been deleted.", "success");
      }catch (error) {
        alert(error);
        console.log(error);
      }
    }
  },
});
