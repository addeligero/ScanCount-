<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')
const isSubmitting = ref(false)

const register = async () => {
  isSubmitting.value = true

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/register', {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
    })

    if (!response.data.access_token) {
      throw new Error('Registration failed')
    }

    localStorage.setItem('token', response.data.access_token)
    alert('Registration successful!')
    router.push('/home')
  } catch (error) {
    console.error('Registration failed:', error)
    alert(error.response?.data?.message || 'Something went wrong.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <v-sheet class="mx-auto" width="400" elevation="4" rounded>
    <h3 class="text-center py-4">Register</h3>
    <v-form @submit.prevent="register" class="pa-4">
      <v-text-field v-model="name" label="Name" required></v-text-field>

      <v-text-field v-model="email" label="Email" type="email" required></v-text-field>

      <v-text-field v-model="password" label="Password" type="password" required></v-text-field>

      <v-text-field
        v-model="password_confirmation"
        label="Confirm Password"
        type="password"
        required
      ></v-text-field>

      <v-btn :loading="isSubmitting" type="submit" color="primary" block class="mt-4">
        Register
      </v-btn>
    </v-form>
  </v-sheet>
</template>
