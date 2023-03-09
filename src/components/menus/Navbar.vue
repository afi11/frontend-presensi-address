<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/divisi">Divisi</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pegawai</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">IP Address</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Jadwal</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Presensi</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              User
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
