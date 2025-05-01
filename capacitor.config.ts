import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.example.scancount',
  appName: 'ScanCount',
  webDir: 'dist',
  bundledWebRuntime: false,
  // platforms: ['android', 'ios'], // Remove 'ios' from here
  // OR
  platforms: ['android'], // Keep only 'android'
}

export default config
