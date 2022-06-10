import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    name: 'Default',
    component: () => import('@/components/not-found/NotFound.vue'),
    meta: {
      title: 'Por defecto',
    },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/post/Home.vue'),
    meta: {
      title: 'Inicio',
    },
  },
  {
    path: '/posts/:name',
    name: 'Post',
    component: () => import('@/components/post/Post.vue'),
    meta: {
      title: 'Post',
    },
  },
  {
    path: '/tags/:name',
    name: 'Tag',
    component: () => import('@/components/post/Tag.vue'),
    meta: {
      title: 'Posts por tags',
    },
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: () => import('@/components/about-me/AboutMe.vue'),
    meta: {
      title: 'Sobre mí',
    },
  },
  {
    path: '/portfolio/:projectKey?',
    name: 'Portfolio',
    component: () => import('@/components/portfolio/Portfolio.vue'),
    meta: {
      title: 'Portfolio',
    },
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: () => import('@/components/not-found/NotFound.vue'),
    meta: {
      title: 'Página no encontrada',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            selector: to.hash,
          });
        }, 500);
      });
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
