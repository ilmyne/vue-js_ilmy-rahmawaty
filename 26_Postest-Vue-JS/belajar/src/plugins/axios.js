import Vue from 'vue';
import {default as axios} from 'axios';

Vue.use({
    install(Vue){
        const api = axios.create();
        Vue.prototype.$api = api;
    },
})