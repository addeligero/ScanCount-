<script setup>
import { useTheme } from 'vuetify'

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
    <h3>ScanCount</h3>
    <v-spacer></v-spacer>

    <v-btn
      :prepend-icon="
        theme.global.name.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
      "
      :text="theme.global.name.value === 'light' ? 'Light' : 'Dark'"
      slim
      @click="onClick"
    ></v-btn>
  </v-app-bar>
</template>
