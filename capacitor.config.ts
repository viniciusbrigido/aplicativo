import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-app-base',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      GOOGLE_MAPS_ANDROID_API_KEY: 'AIzaSyBm0U3FbqXvrrJn8Uq0-xJf3ANghN8rf_A',
      GOOGLE_MAPS_IOS_API_KEY: 'AIzaSyBm0U3FbqXvrrJn8Uq0-xJf3ANghN8rf_A',
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '300',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '3000'
    }
  }
};

export default config;
