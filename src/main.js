import { createApp } from 'vue'
import App from './App.vue'
import firebaseConfig from '@/fireBaseConfig';

    createApp(App)
  .use(firebaseConfig)
  .mount('#app');
