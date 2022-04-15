import axios from "axios";

const state = () => ({
    list : [],
});

const mutations = {
    setList(state, param){
        state.list = [...param];
    },
};

const actions = {
    fetchList(store){
        axios
        .get("https://newsapi.org/v2/everything",{
            params : {
                q : "tesla",
                from : "2022-03-14",
                shortBy : "publishedAt",
                apiKey : "aacdd256728d415eb48d934dc9e21859",
            },
        })
        .then((response)=>{
            store.commit("setList", response.data.articles);
        })
        .catch((err)=> console.log(err));
    },
};
export default {
    state,
    mutations,
    actions,
}
