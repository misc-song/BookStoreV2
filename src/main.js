import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from '@/routers/router';   //����router.js�ļ�
Vue.config.productionTip = true;

Vue.use(ElementUI);

new Vue({
    router,					//ȫ�������ļ�
    render: h => h(App),
   
}).$mount('#app');