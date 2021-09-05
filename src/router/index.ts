import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import NewsList from '@/views/NewsList.vue';
import NewsDetail from '@/views/NewsDetail.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'NewsList',
    component: NewsList,
  },
  {
    path: '/index.html',
    name: 'NewsList',
    component: NewsList,
  },
  {
    path: '/NewsDetail',
    name: 'NewsDetail',
    component: NewsDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
