/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listPokemon: []
  },
  getters: {
  },
  mutations: {
    setlistPokemon(state, payload) {
      state.listPokemon = payload
    }
  },
  actions: {
    fetchPokemon(store) {
      axios.get('https://pokeapi.co/api/v2/pokemon').then((response => {
        // console.log("repsonse", response);
        store.commit("setlistPokemon", response.data.results);
      }))
    }
  },
  modules: {
  }
})
