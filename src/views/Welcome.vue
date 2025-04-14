<script setup>
import { useTheme } from 'vuetify'
import Login from '@/components/Auth/Login.vue'

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
        :text="theme.global.name.value === 'light' ? 'Light' : 'Dark'"
        slim
        @click="onClick"
      ></v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="fill-height d-flex align-center justify-center">
        <img src="@/assets/img/1.png" alt="" style="max-width: 50%" />
        <Login />
      </v-container>
    </v-main>
  </v-app>
</template>
