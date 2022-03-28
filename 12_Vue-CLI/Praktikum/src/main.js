import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
// import { component } from "vue/types/umd";

Vue.config.productionTip = false
Vue.use(VueRouter);


const routes = [
  {
      path: "/",
      name: "Home",
      component: Home,
  },
  {
      path: "/about",
      name: "About",
      component: About,
  },
  {
      path: "/contact",
      name: "Contact",
      component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  // base: process.env.BASE_URL,
  routes,
});

// export default router;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')