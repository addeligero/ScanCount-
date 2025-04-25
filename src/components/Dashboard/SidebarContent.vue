<script setup>
defineProps({
  toggleDrawer: Function,
})
</script>

<template>
  <v-main style="height: 100vh">
    <div class="d-flex justify-center align-center h-100">
      <v-btn color="primary" @click="toggleDrawer">Toggle</v-btn>
    </div>
  </v-main>
</template>
