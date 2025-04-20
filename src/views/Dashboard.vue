<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import Header from '@/components/Header.vue'
import MainContent from '@/components/Dashboard/MainContent.vue'

const router = useRouter()
const user = ref(null)

const logout = () => {
  localStorage.removeItem('token')
  router.push('/')
}

const fetchUser = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    user.value = response.data
  } catch (error) {
    console.error('Failed to fetch user:', error)
    router.push('/')
  }
}

onMounted(() => {
  if (!localStorage.getItem('token')) {
    router.push('/')
  } else {
    fetchUser()
  }
})
</script>

<template>
  <v-container fluid class="mt-14">
    <Header />
    <v-row>
      <v-col cols="12" md="4" lg="3">
        <v-card class="pa-4" elevation="2" rounded>
          <v-avatar size="120" class="mb-4">
            <img v-if="user && user.avatar_url" :src="user.avatar_url" alt="User Avatar" />
            <v-icon v-else>mdi-account</v-icon>
          </v-avatar>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">{{ user?.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ user?.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-btn color="error" block @click="logout">Logout</v-btn>
        </v-card>
      </v-col>

      <v-col cols="12" md="8" lg="9"><MainContent /> </v-col>
    </v-row>
  </v-container>
</template>
