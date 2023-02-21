import Vue from 'vue';
import VueRouter, { Route, RouteConfig } from 'vue-router';

import { RoutesMap } from '@/router/Routes';
import config from '../models/Config';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: RoutesMap.Home,
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: config.baseUrl,
  routes,
});

export default router;
