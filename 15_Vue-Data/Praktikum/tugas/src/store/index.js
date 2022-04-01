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
            axios.get('https://newsapi.org/v2/top-headlines', (
                params:{
                    apiKey: "aacdd256728d415eb48d934dc9e21859"
                }
        })
            then((response) => {
                console.log("response", response);
                store.commit("setlistFire", response.data.articles)
            });
        },
     },
    modules: {},
});