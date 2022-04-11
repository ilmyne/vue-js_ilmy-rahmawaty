<template>
  <div id="app">
    <h1>List Pokemon</h1>
    <ul>
      <li v-for="(pokemon, index) in pokemons" :key="index">
        {{ pokemon.name }}
      </li>
    </ul>
    <!-- {{ pokemons }} -->
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    pokemons() {
      return this.$store.state.listPokemon;
    },
  },
  mounted() {
    this.$store.dispatch('fetchPokemon');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
