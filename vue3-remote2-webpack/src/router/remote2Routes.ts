import { RouteRecordRaw } from 'vue-router';

export const remote2Routes: Array<RouteRecordRaw> = [
  {
    path: 'child1',
    name: 'child1',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ChildOne.vue'),
  },
  {
    path: 'child2',
    name: 'child2',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ChildTwo.vue'),
  },
];
