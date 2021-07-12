import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Pages
import HomePage from '@/pages';
const AboutUsPage = () => import('@/pages/AboutUs');
const BranchesPage = () => import('@/pages/Branches');
const ContactUsPage = () => import('@/pages/ContactUs');
const ProductsPage = () => import('@/pages/Products');
const ProductsSoftnerPage = () => import('@/pages/Products/Softner');
const ProductsWashingLiquidPage = () => import('@/pages/Products/WashingLiquid');
const ProductsWashingPowderPage = () => import('@/pages/Products/WashingPowder');

const routes = [
  { path: '/', component: HomePage },
  { path: '/about-us', component: AboutUsPage },
  { path: '/branches', component: BranchesPage },
  { path: '/products', component: ProductsPage },
  { path: '/contact-us', component: ContactUsPage },
  { path: '/products/softner', component: ProductsSoftnerPage },
  { path: '/products/washing-liquid', component: ProductsWashingLiquidPage },
  { path: '/products/washing-powder', component: ProductsWashingPowderPage }
];

const router = new VueRouter({ routes, mode: 'history' });

export default router;
