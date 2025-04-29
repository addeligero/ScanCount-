<script setup lang="ts">
import image1 from '@/assets/img/Dashboard/family.jpg'

const images = [
  image1,
  'https://via.placeholder.com/800x400',
  'https://via.placeholder.com/800x400',
]
</script>

<template>
  <v-carousel height="400" show-arrows="hover" cycle hide-delimiter-background>
    <v-carousel-item v-for="(img, i) in images" :key="i">
      <v-img :src="img" height="100%" contain> </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped></style>
