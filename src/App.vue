<template>
  <div id="App">
    <ol>
        <li v-for="item in items" v-bind:key="item">
            {{ item }}
        </li>
      </ol>

      <input id="input" type="text" v-model="list">
        <button @click="addItem">Tambahkan</button>
        <div v-if="items.length >= 4">Hebat!</div>
  </div>
</template>

<script>

export default ({
  name: 'App',
  data() {
    return {
          list: "",
          items: []
        }
      },
      methods:{
        addItem() {
          if(this.list !=''){this.items.push( this.list )}
          this.list='';
                  }
              }
    })
    
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
