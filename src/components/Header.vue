<script setup>
import { useTheme } from 'vuetify'
import { watch, ref } from 'vue'

// Props
const { toggleDrawer } = defineProps({
  toggleDrawer: Function,
})

// Theme toggle
const theme = useTheme()
const savedTheme = localStorage.getItem('theme')

if (savedTheme) {
  theme.global.name.value = savedTheme
}

function onClick() {
  const newTheme = theme.global.name.value === 'light' ? 'dark' : 'light'
  theme.global.name.value = newTheme
  localStorage.setItem('theme', newTheme)
}

// Optional drawer group logic
const drawer = ref(false)
const group = ref(null)
watch(group, () => {
  drawer.value = false
})
</script>

<template>
  <v-app-bar class="px-3 backward">
    <h3>AidFlow</h3>
    <v-spacer></v-spacer>

    <v-btn
      :prepend-icon="
        theme.global.name.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
      "
      :text="theme.global.name.value === 'light' ? 'Light' : 'Dark'"
      slim
      @click="onClick"
    ></v-btn>

    <v-btn @click="toggleDrawer">
      <v-app-bar-nav-icon class="fill-height" variant="text"></v-app-bar-nav-icon>
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
.backward {
  position: relative;
  z-index: 1;
}
</style>
