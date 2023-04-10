import { RouteRecordRaw } from 'vue-router';

export const registerRemoteRoutes = (
  basePath: string,
  routes: RouteRecordRaw[]
): RouteRecordRaw[] => {
  routes.forEach((r) => (r.path = `${basePath}${r.path}`));
  return routes;
};
