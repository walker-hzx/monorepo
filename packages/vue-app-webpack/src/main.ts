import { createApp } from 'vue';
import App from './app.vue';
import './app.less'
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');