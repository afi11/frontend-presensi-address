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
      <a href="#" class="card-link text-success">
        <i class="bi-pencil"></i>
      </a>
      <a href="#" class="card-link text-danger">
        <i class="bi-trash"></i>
      </a>
    </div>
  </div>
</template>