<script setup>
import Header from '@/components/Header.vue'
import Login from '@/components/Auth/Login.vue'
</script>

<template>
  <v-app>
    <Header />

    <v-main>
      <v-container fluid class="fill-height d-flex align-center justify-center">
        <img src="@/assets/img/1.png" alt="" style="max-width: 50%" />
        <Login />
      </v-container>
    </v-main>
  </v-app>
</template>
