<template>
    <div>
        <h1>Pokemon Page</h1>
    </div>
</template>

<script>
export default {
    name: "Pokemon",
    methods: {
        fetchPokemonList() {
            this.$store.dispatch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
        }
    }
}
</script>