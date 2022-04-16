/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const state = () => ({
    listMovie: [],
})

const mutations = {
    setListMovie(state, param) {
    state.listMovie = param;
},
}

const actions = {
    fetchlistMovie(store) {
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=58100e983f07694bf0b11723c965d3b0&language=en-US&page=1")
        .then((response) => {
            console.log("response", response)
            store.commit("setlistMovie", response.data.results)
        });
        // .catch((err) =>console.log('error',err))
    },
};

export{
    state,
    mutations,
    actions,
};