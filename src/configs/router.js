import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Pages
import HomePage from '@/pages';
const AboutUsPage = () => import('@/pages/AboutUs');

const routes = [
  { path: '/', component: HomePage },
  { path: '/about-us', component: AboutUsPage }
];

const router = new VueRouter({ routes, mode: 'history' });

export default router;
