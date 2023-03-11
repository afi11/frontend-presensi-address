<script setup>
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useDivisiStore } from "../../stores/divisi";
import CardItem from "../../components/cards/CardItem.vue";

const { divisis } = storeToRefs(useDivisiStore());
const store = useDivisiStore();

const nama_divisi = ref(null);
const limit = ref(5);
const listLimit = ref([5, 10, 50, 100]);
const page = ref(1);

onMounted(() => {
  store.fetchDivisi(limit.value, page.value);
  console.log(listLimit.value)
});

function changeLimit() {
  store.fetchDivisi(limit.value, page.value);
}

function actionSubmitDivisi() {
  store.postDivisi({ nama_divisi: nama_divisi.value });
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <select class="form-select" v-model="limit" @change="changeLimit()">
          <option v-for="i in listLimit" :key="i" :value="i" :selected="i == limit ? true : false">
            {{ i }}
          </option>
        </select>
        <button
          type="button"
          class="btn btn-primary mb-3"
          data-bs-toggle="modal"
          data-bs-target="#modalTambahRuangan"
        >
          Tambah
        </button>
        <CardItem
          v-for="divisi in divisis"
          :key="divisi.id"
          :title="divisi.divisi_nama"
        />
      </div>
    </div>
  </div>

  <!-- Modal -->
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
            id="btnCloseModal"
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
</template>
