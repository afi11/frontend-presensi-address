<script setup>
defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String
  }
});

</script>

<template>
  <div class="card col-md-12 mb-2">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
      <a href="#" data-bs-toggle="modal"
          data-bs-target="#modalEditRuangan" class="card-link text-success" @click="$emit('get-data')" >
        <i class="bi-pencil"></i>
      </a>
      <a href="#" class="card-link text-danger" @click="$emit('del-data')">
        <i class="bi-trash"></i>
      </a>
    </div>
  </div>
</template>