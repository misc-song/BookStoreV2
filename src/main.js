import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from '@/routers/router';   //导入router.js文件
Vue.config.productionTip = true;

Vue.use(ElementUI);

new Vue({
    router,					//全局引入文件
    render: h => h(App),
   
}).$mount('#app');