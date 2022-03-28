<template>
  <div id="App">
    <router-view></router-view>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>      
    </div>

    <h1>{{ message }}</h1>
    <ol>
        <li v-for="(item, index) in items" v-bind:key="item">
            {{ item }}            
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
        <div v-if="items.length >= 4">Hebat!</div>
  </div>
</template>

<script>

export default ({
  name: 'App',
  data() {
    return {
      message: "Ini adalah To Do List Ilmy",
        isEdit: false,
        selectedIndex: null,
          list: "",
          items: []
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
        },

        deleteItem(index) {
          this.items.splice(index, 1)
        },
        redirect(list){
          return this.$router.push({name: "DetailTask",
          params:{title : list}});
        },
              },
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