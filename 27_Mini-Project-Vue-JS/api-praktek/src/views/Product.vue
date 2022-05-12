<template>
    <div class="product">
    <Navbar />
    <div class="container">
      <Hero2 />
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Hero2 from '@/components/Hero2.vue'

export default {
  name: 'Product',
  components: {
    Navbar,
    Hero2
  }
}
</script>

<style>

</style>