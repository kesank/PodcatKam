import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Podcasts',
        name: 'Podcasts',
        component: () => import("@/views/Podcast.vue"),
    },
    {
        path: '/Article',
        name: 'Article',
        component: () => import("@/views/Article.vue"),
    },
    {
        path: '/Video',
        name: 'Video',
        component: () => import("@/views/Video.vue"),
    },
    {
        path: '/a_propos',
        name: 'APropos',
        component: () => import("@/views/Apropos.vue"),
    },
    {
        path: '/Podcast/:id',
        name: 'IdPodcast',
        component: () => import("@/views/IdPodcast.vue"),
    },
];

const router = new VueRouter({
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
});

export default router;
