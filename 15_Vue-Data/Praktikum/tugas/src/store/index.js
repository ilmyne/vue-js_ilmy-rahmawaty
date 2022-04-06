import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

Vue.use(Vuex);

const GlobalPermanent = createPersistedState({
    paths: ["list", "des", "tittle"],
});
export default new Vuex.Store({
    plugins: [GlobalPermanent],
    state: {
        list: [],
        desc: "Loading....",
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
    });

    actions: {
        changeDesc(store, payload){
            store.commit("setDesc", payload);
        },
        fetchFire(store){
            axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-02-28&sortBy=publishedAt&apiKey=2ddeba2597c24a05b0c461d469517349').
            then((response) => {
                console.log("response", response);
                store.commit("setlistFire", response.data.articles)
                fetchFire(store){
                    axios.get ('https://newsapi.org/v2/everything?q=tesla&from=2022-02-28&sortBy=publishedAt&apiKey=2ddeba2597c24a05b0c461d469517349').
                    then((response => {
                        console.log("response", response);
                        store.commit("setlistFire", response.data.articles)
                    }));
                },
             },
            modules: {},
             
        })