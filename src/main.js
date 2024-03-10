import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import vuetify from './plugins/vuetify';

createApp(App)
  .use(router) // Use the router
  .use(vuetify)
  .mount('#app');
