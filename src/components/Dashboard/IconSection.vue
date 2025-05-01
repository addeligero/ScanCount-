<script lang="ts" setup>
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { ref } from 'vue'

const capturedImage = ref<string | null>(null)

const takePicture = async () => {
  try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    })

    capturedImage.value = image.webPath
    console.log('Image captured:', image)
  } catch (error) {
    console.error('Error taking picture:', error)
  }
}
</script>

<template>
  <v-container>
    <v-card class="mx-auto" max-width="344">
      <v-card-title prepend-icon="mdi-camera">Capture Image</v-card-title>
      <v-card-text>
        <v-btn @click="takePicture" color="primary">Take Picture</v-btn>
        <div v-if="capturedImage">
          <img :src="capturedImage" alt="Captured Image" style="max-width: 100%" />
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
