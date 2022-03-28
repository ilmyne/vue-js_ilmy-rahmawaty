<template>
  <div id="App">
    <router-view></router-view>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>      
    </div>


    <!-- BELAJAR DEMO KOMPONEN VUE -->
    <!-- <input type="number" v-model.number="variabelSatu" />
    <input type="number" v-model.number="variabelDua" />
    <button @click="lakukanPenjumlahan">Lakukan Penambahan</button>
    <div>Hasil: {{ hasil }}</div>
    <AnakKomponen :hasilPenjumlahan="hasil" /> -->

    <h1>{{ message }}</h1>
    <ol>
        <li v-for="(item, index) in items" v-bind:key="item">
            {{ item }}
            <!-- menambahkan button edit dan hapus -->
            <!-- <div v-if="!isUpdate">
              <br><button @click="editItem(index, item)">Edit</button>              
            </div>
            <div v-else>              
              <button @click="updateItem(index, item)">Edit</button>
            </div> -->
            <br><button @click="editItem(index, item)">Edit</button>              
            <button @click="deleteItem(index)">Hapus</button>

        </li>
      </ol>

      <div v-if="!isEdit">
      <input id="input" type="text" v-model="list">
        <br><button @click="addItem">Tambahkan</button>
      </div>

      <div v-else>
        <input id="input" type="text" v-model="list">
        <br><button @click="updateItem">Update</button>
      </div>
      
        <!-- cara yg lain untuk membuat input dan submit -->
        <!-- <input type="text" v-model="list">
        <input type="submit" value="Tambahkan" @click="addItem"> -->

        <div v-if="items.length >= 4">Hebat!</div>
  </div>
</template>

<script>

// import AnakKomponen from '@/components/AnakKomponen.vue'
// import { penambahan } from '@/utils'

export default ({
  name: 'App',

  // components: { AnakKomponen },

  data() {
    return {
      message: "Ini adalah To Do List Ilmy",
        isEdit: false,
        isUpdate: false,
        selectedIndex: null,
          list: "",
          items: []

      // variabelSatu: 0,
      // variabelDua: 0,
      // hasil: 0

        }
      },
      methods:{
        addItem() {
          if(this.list !=''){this.items.push( this.list )}
          this.list='';
                  },

        editItem(index, item) {
          const currentValue = this.items[index];
          this.list = currentValue;
          this.item = item
          this.selectedIndex = index
          this.isEdit = true
        },

        updateItem() {
          this.items.splice(this.selectedIndex, 1, this.list)
          this.isEdit = false
          // this.isUpdate = false
        },

        deleteItem(index) {
          this.items.splice(index, 1)
        }

          // lakukanPenjumlahan() {
          //   this.hasil = penambahan(this.variabelSatu, this.variabelDua);
          // }

              }
    })
    
</script>

<style>
#input {
  width: 1000px;
  margin-right: 20px;
}
#editItem {
  width: 1000px;
  margin-right: 20px;
}
#deleteItem {
  width: 1000px;
  margin-right: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>