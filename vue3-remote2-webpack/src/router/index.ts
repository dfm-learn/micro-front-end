import { createRouter, createWebHistory } from 'vue-router';
import { registerRemoteRoutes } from './registerRemoteRoutes';
import { remote2Routes } from './remote2Routes';
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: registerRemoteRoutes('', remote2Routes),
});

export default router;
