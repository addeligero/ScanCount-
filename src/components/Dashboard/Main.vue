<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import Header from '@/components/Header.vue'

const drawer = ref(false) // Controls the sidebar visibility
const toggleDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<template>
  <v-container fluid class="dashboard-container">
    <!-- Header -->
    <Header :toggleDrawer="toggleDrawer" />

    <!-- Main Layout -->
    <v-row>
      <!-- Sidebar -->
      <v-col cols="12" md="3" lg="2" class="sidebar-wrapper">
        <Sidebar v-model="drawer" />
      </v-col>

      <!-- Main Content -->
      <v-col cols="12" md="9" lg="10" class="main-content-wrapper">
        <v-card class="main-content">
          <h1 class="text-h4 mb-4">Welcome to the Dashboard</h1>
          <p class="text-body-1">
            This is your main dashboard. Use the sidebar to navigate through different sections.
          </p>

          <v-divider class="my-4"></v-divider>

          <v-row>
            <v-col cols="12" md="4">
              <v-card class="dashboard-card" elevation="2">
                <v-card-title>Statistics</v-card-title>
                <v-card-text>
                  <p>View your latest statistics here.</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card class="dashboard-card" elevation="2">
                <v-card-title>Reports</v-card-title>
                <v-card-text>
                  <p>Access detailed reports and analytics.</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card class="dashboard-card" elevation="2">
                <v-card-title>Settings</v-card-title>
                <v-card-text>
                  <p>Manage your account and preferences.</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 0;
}

.sidebar-wrapper {
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  min-height: 100vh;
}

.main-content-wrapper {
  padding: 1rem;
}

.main-content {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.dashboard-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
}
</style>
