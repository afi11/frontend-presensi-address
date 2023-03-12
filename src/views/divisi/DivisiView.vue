<script setup>
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import { useDivisiStore } from "../../stores/divisi";
import CardItem from "../../components/cards/CardItem.vue";

const { divisis } = storeToRefs(useDivisiStore());
const store = useDivisiStore();

const id_divisi = ref(null);
const nama_divisi = ref(null);
const limit = ref(5);
const listLimit = ref([5, 10, 50, 100]);
const page = ref(1);

onMounted(() => {
  store.fetchDivisi(limit.value, page.value);
});

function clearData() {
  id_divisi.value = null;
  nama_divisi.value = null;
}

function changeLimit() {
  store.fetchDivisi(limit.value, page.value);
}

function actionSubmitDivisi() {
  store.postDivisi({ nama_divisi: nama_divisi.value });
}

function getDivisi(divisi) {
  nama_divisi.value = divisi.divisi_nama;
  id_divisi.value = divisi.ID;
}

function actionUpdateDivisi() {
  store.updateDivisi({ id: id_divisi.value, nama_divisi: nama_divisi.value });
}

function actionDeleteDivisi(divisi) {
  store.deleteDivisi({ id: divisi.ID });
}

function actionConfirmDelete(divisi) {
  console.log(divisi);
  Swal.fire({
    title: "Konfirmasi ?",
    text: "Apakah yakin menghapus data " + divisi.divisi_nama,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      actionDeleteDivisi(divisi);
    }
  });
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="row">
          <div class="col-6">
            <select
              class="form-select select-area"
              v-model="limit"
              @change="changeLimit()"
            >
              <option value="5" selected>Pilih</option>
              <option
                v-for="i in listLimit"
                :key="i"
                :value="i"
                :selected="i == limit ? true : false"
              >
                {{ i }}
              </option>
            </select>
          </div>
          <div class="col-6">
            <input type="text" class="form-control" placeholder="Search..." />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-primary mb-3 mt-2"
          @click="clearData()"
          data-bs-toggle="modal"
          data-bs-target="#modalTambahRuangan"
        >
          Tambah
        </button>
        <CardItem
          v-for="divisi in divisis"
          :key="divisi.id"
          :title="divisi.divisi_nama"
          @get-data="getDivisi(divisi)"
          @del-data="actionConfirmDelete(divisi)"
        />

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <!-- Modal Tambah -->
  <div
    class="modal fade"
    id="modalTambahRuangan"
    tabindex="-1"
    aria-labelledby="modalTambahRuanganLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalTambahRuanganLabel">
            Tambah Divisi
          </h1>
          <button
            type="button"
            class="btn-close"
            id="btnCloseAddModal"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="actionSubmitDivisi">
            <div class="form-group">
              <label>Nama Divisi</label>
              <input
                type="text"
                class="form-control"
                name="nama_divisi"
                v-model="nama_divisi"
              />
            </div>
            <button class="btn mt-2 btn-primary" type="submit">Simpan</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Edit -->
  <div
    class="modal fade"
    id="modalEditRuangan"
    tabindex="-1"
    aria-labelledby="modalEditRuanganLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalEditRuanganLabel">
            Edit Divisi
          </h1>
          <button
            type="button"
            class="btn-close"
            id="btnCloseEditModal"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="actionUpdateDivisi">
            <div class="form-group">
              <label>Nama Divisi</label>
              <input
                type="text"
                class="form-control"
                name="nama_divisi"
                v-model="nama_divisi"
              />
            </div>
            <button class="btn mt-2 btn-primary" type="submit">Simpan</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
