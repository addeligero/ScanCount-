<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

function onClick() {
  theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light'
}
const text = ref('')
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
        <v-sheet class="mx-auto" width="300">
          <v-form fast-fail @submit.prevent>
            <v-text-field
              v-model="firstName"
              :rules="firstNameRules"
              label="First name"
            ></v-text-field>

            <v-text-field
              v-model="lastName"
              :rules="lastNameRules"
              label="Last name"
            ></v-text-field>

            <v-btn class="mt-2" type="submit" block>Submit</v-btn>
          </v-form>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
