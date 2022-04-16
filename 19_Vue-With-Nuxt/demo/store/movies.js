/* eslint-disable no-unused-vars */
import axios from "axios"
const state = () =>({
    list: [],
})

const mutations = {
    setMovies(state,param){
        state.list = param
    },
}

const actions = {
    fetchMovies(store){
        console.log('action called')
        
        this.$axios.$get("https://api.themoviedb.org/3/movie/now_playing?api_key=58100e983f07694bf0b11723c965d3b0&language=en-US&page=1").then((res)=>{
            store.commit('setMovies',res.results)
            console.log('res',res)
        }).catch((err)=>console.log('error', err))
    }
}

export{state,mutations,actions}