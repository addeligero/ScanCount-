<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function onClick() {
  theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-app>
    <v-app-bar class="px-3">
      <v-spacer></v-spacer>

      <v-btn
        :prepend-icon="
          theme.global.name.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        text="Toggle Theme"
        slim
        @click="onClick"
      ></v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="fill-height d-flex align-center justify-center">
        <h1>Main Content</h1>
      </v-container>
    </v-main>
  </v-app>
</template>
