<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import MainContent from '@/components/Dashboard/MainContent.vue'
import Header from '@/components/Header.vue'

const drawer = ref(false)
</script>

<template>
  <Header />
  <v-card>
    <v-layout>
      <Sidebar v-model="drawer" />
      <MainContent :toggleDrawer="() => (drawer = !drawer)" />
    </v-layout>
  </v-card>
</template>
