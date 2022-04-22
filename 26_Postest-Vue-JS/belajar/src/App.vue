<template>
  <div id="app">
      <h1>LIST PRODUCTS</h1>
      <!-- <div>{{ info }}</div> -->
    <div>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.price }} - {{ product.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {

  mounted() {
    this.getAllProducts();
  },

  methods: {
    async getAllProducts(){
      this.$store.state.info = '';
      this.$store.state.products = [];

      try {
      const response = await this.$api.get('https://fakestoreapi.com/products');
      this.$store.state.products = response.data;
      } catch (error) {
        this.$store.state.info = 'GAGAL';
      }
    }
  }
}
</script>