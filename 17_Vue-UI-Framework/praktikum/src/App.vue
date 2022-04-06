<template>
  <v-app id="app">
    
    <v-app-bar
      app
      color="primary"
      dark
    >
      <Header/>
    </v-app-bar>

    <v-main>
      <v-layout class="my-8">
        <v-flex xs4 class="mx-auto">
          <v-btn outlined @click="changeThemeColor('#B8255F')" class="my-2" color="#B8255F">Merah</v-btn>
          <v-btn outlined @click="changeThemeColor('#7ecc49')" class="my-2" color="#7ecc49">Hijau</v-btn>
        </v-flex>
        </v-layout>
        <v-layout class="my-8">
        <v-flex xs4 class="mx-auto">
          <v-text-field outlined label="username"></v-text-field>
          <v-btn color="primary" block>Log in</v-btn>
        </v-flex>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  // components: {
  //   HelloWorld,
  // },

  data: () => ({
    //
  }),
  methods: {
    changeThemeColor(color){
      this.$vuetify.theme.themes.light.primary = color;
    }
  }
};
</script>
