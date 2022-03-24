<template>
  <div id="App">
    <input type="text" v-model="variabelSatu" />
    <input type="text" v-model="variabelDua" />
    <button @click="lakukanPenjumlahan">Lakukan Penambahan</button>
    <!-- <h1>{{ message }}</h1>
    <ol>
        <li v-for="item in items" v-bind:key="item">
            {{ item }}
        </li>
      </ol>

      <input id="input" type="text" v-model="list">
        <button @click="addItem">Tambahkan</button>
        <div v-if="items.length >= 4">Hebat!</div> -->
  </div>
</template>

<script>
import { penambahan } from '@/utils'

export default ({
  name: 'App',
  data() {
    return {
      // message: "Ini adalah To Do List Ilmy",
      //     list: "",
      //     items: []
      variabelSatu: 0,
      variabelDua: 0,
      hasil: 0
        }
      },
      methods:{
        addItem() {
          // if(this.list !=''){this.items.push( this.list )}
          // this.list='';
          //         }
          lakukanPenjumlahan(); {
            this.hasil = penambahan(this.variabelSatu, this.variabelDua);
          }
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