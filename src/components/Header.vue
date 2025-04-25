<script setup>
import { useTheme } from 'vuetify'
import { watch, ref } from 'vue'

const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})
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
</script>

<template>
  <v-app-bar class="px-3">
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
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
</template>
