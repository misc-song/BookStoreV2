import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // 注册vue-router

import Main from '@/components/Main'
import Register from '@/components/Register'
import Login from '@/components/Login'
const router = new VueRouter({
    routes: [
        {
            path: '/Login',
            name: 'Login',
            component: Login, //(resolve) => require(['@/components/Login'], resolve),
            meta: { requireAuth: false },
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register,// (resolve) => require(['@/components/Register'], resolve),
            meta: { requireAuth: false },

        },
        {
            path: '/',
            name: 'Main',
            component: Main,  /*(resolve) => require(['@/components/Home'], resolve),*/
            meta: { requireAuth: false },

        },
        {
            path: '/Main',
            name: 'Main',
            component: Main,  /*(resolve) => require(['@/components/Home'], resolve),*/
            meta: { requireAuth: false },

        }
    ]
});
export default router;