import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app: any = createApp(App);
app.use(router);

app.config.globalProperties.append = (path: string, pathToAppend: string) =>
  path + (path.endsWith('/') ? '' : '/') + pathToAppend;
app.mount('#app');
