<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const user = ref(null)

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
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
    router.push('/login')
  }
}

onMounted(() => {
  if (!localStorage.getItem('token')) {
    router.push('/login')
  } else {
    fetchUser()
  }
})
</script>

<template>
  <v-container fluid>
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

      <v-col cols="12" md="8" lg="9">
        <v-card class="pa-4" elevation="2" rounded>
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="pa-4" elevation="1" rounded>
                <v-card-title>
                  <v-icon>mdi-chart-line</v-icon>
                  &nbsp; Sales Overview
                </v-card-title>
                <v-card-text>
                  <v-chart :data="chartData"></v-chart>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card class="pa-4" elevation="1" rounded>
                <v-card-title>
                  <v-icon>mdi-calendar-check</v-icon>
                  &nbsp; Tasks Overview
                </v-card-title>
                <v-card-text>
                  <v-list>
                    <v-list-item v-for="task in tasks" :key="task.id">
                      <v-list-item-content>
                        <v-list-item-title>{{ task.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ task.dueDate }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
