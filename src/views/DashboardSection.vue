<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '@/components/Dashboard/SidebarContainer.vue'
import Header from '@/components/HeaderSection.vue'
import Carousel from '@/components/Dashboard/CarouselSection.vue'
import IconSection from '@/components/Dashboard/IconSection.vue'

const drawer = ref(false)
const toggleDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<template>
  <Sidebar v-model="drawer" />

  <Header :toggleDrawer="toggleDrawer" />

  <div class="main-content">
    <Carousel />
    <IconSection />
  </div>
</template>

<style scoped>
.main-content {
  margin-top: 20px;
}

.main-content {
  margin-top: -10px;
}

.content-wrapper {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
