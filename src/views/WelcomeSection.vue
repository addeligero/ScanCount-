<script setup lang="ts">
import Login from '@/components/Auth/LoginForm.vue'
import Header from '@/components/HeaderSection.vue'
</script>

<template>
  <v-app>
    <v-main>
      <Header />
      <v-container fluid class="fill-height d-flex align-center justify-center">
        <img src="@/assets/img/1.png" alt="" style="max-width: 50%" />
        <Login />
      </v-container>
    </v-main>
  </v-app>
</template>
