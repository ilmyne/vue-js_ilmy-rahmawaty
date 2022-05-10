import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import axios from 'axios'

Vue.use(Vuex);


const GlobalPermanent = createPersistedState({
    paths: ["list", "des", "title"],
});
 export default new Vuex.Store({
     plugins: [GlobalPermanent],
     state: {
        list: [],
        desc: "Belum ada Deskripsi Nih!",
        title: "",
        listFire: [],
        
     },
     mutations: {
        setDesc(state, payload){
            state.desc = payload;
        },
        setlistFire(state, payload){
            state.listFire = payload;
        },
     },
     actions: {
        changeDesc(store, payload){
            store.commit("setDesc", payload);
        },
        fetchFire(store){
            axios.get ('https://newsapi.org/v2/everything?q=tesla&from=2022-02-28&sortBy=publishedAt&apiKey=aacdd256728d415eb48d934dc9e21859').
            then((response => {
                console.log("response", response);
                store.commit("setlistFire", response.data.articles)
            }));
        },
     },
    modules: {},
     
})