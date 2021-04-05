import {createRouter, createWebHistory} from 'vue-router';
import TheProducts from 'pages/TheProducts.vue';


const router = createRouter({
  routes: [
    {path: '/', redirect: '/products'},
    {name: 'products', path: '/products', component: TheProducts},
  ],
  history: createWebHistory(),
});

export default router;
