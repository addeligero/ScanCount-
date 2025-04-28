<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '@/components/Dashboard/SidebarContainer.vue'
import Header from '@/components/HeaderSection.vue'
import Main from '@/components/Dashboard/MainSection.vue'

const drawer = ref(false)
const toggleDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<template>
  <Sidebar v-model="drawer" />

  <Header :toggleDrawer="toggleDrawer" />

  <div class="main-content">
    <Main />
  </div>
</template>

<style scoped>
.main-content {
  margin-top: 50px; /* Adjust based on your header's height */
}

.main-content {
  position: relative;

  padding: 2rem;
}

.content-wrapper {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
