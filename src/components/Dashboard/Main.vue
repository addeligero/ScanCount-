<template>
  <v-card
    class="main-content d-flex flex-column align-center justify-center"
    :class="{ 'dark-mode': isDarkMode }"
    elevation="2"
    width="100%"
    height="100%"
  >
    <v-card-title class="text-center text-h4 font-weight-bold mb-4">
      Welcome to your easy starter dashboard
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  computed: {
    isDarkMode() {
      return this.$vuetify.theme.dark
    },
  },
}
</script>

<style scoped>
.dark-mode {
  background-color: black;
}
</style>
