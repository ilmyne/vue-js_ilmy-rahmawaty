<template>
  <v-row>
    <v-col v-for="(movie, idx) in movieList" :key="idx" cols="3">
      <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <v-img
      height="250"
      :src="`http://image.tmdb.org/t/p/w500${movie.poster_path}`"
    ></v-img>

    <v-card-title class="text-truncate">{{movie.title}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="movie.vote_average / 2"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4"> {{movie.vote_average}} ({{movie.vote_count}})</div>
      </v-row>

      <div class="my-4"> {{movie.overview}} </div>
    </v-card-text>
  </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LatestMovie',
  computed: {
    movieList() {
      return this.$store.state.movie.list
    },
  },
  mounted(){
    this.$store.dispatch("movie/fetchMovie")
  },
  }
</script>