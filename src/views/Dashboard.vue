<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import Header from '@/components/Header.vue'
import Main from '@/components/Dashboard/Main.vue'

const drawer = ref(false)
const toggleDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<template>
  <Sidebar v-model="drawer" />

  <Main />
</template>

<style scoped>
.main-content {
  position: relative;
  z-index: 999;
  padding: 2rem;
}

.content-wrapper {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
