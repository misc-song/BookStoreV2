import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from '@/routers/router';   //����router.js�ļ�
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = true;
//ע��axios
Vue.use(VueAxios, axios);
//ע��ElementUI
Vue.use(ElementUI);

new Vue({
    router,					//ȫ�������ļ�
    render: h => h(App),
   
}).$mount('#app');