import axios from "axios";
const state = () => ({

});

const mutations = {
    setlist(state, param){
        state.list = param;
    }
};

const actions = {
    fetchlist(store){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
};

export default {
    state,
    mutations,
    actions
};