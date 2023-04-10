import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HostHomeView from '../views/HostView.vue';
import { registerRemoteRoutes } from './registerRemoteRoutes';
import { remote2Routes } from 'remote2/routes';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HostHomeView,
  },
  {
    path: '/remote1/',
    name: 'remote1',
    component: () => import('remote1/RemoteHomeView'),
  },
  {
    path: '/remote2/',
    name: 'remote2',
    component: () => import('remote2/RemoteTwoView'),
    children: [...remote2Routes],
  },
];
console.log('***', remote2Routes);
// const registeredRemote2Routes = registerRemoteRoutes('/remote2', remote2Routes);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  //routes: [...routes, ...registeredRemote2Routes],
  routes,
});

export default router;
