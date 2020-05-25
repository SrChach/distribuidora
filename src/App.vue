<template>
  <div id="app">
    <div>
      <navbar/>
      <slider/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import slider from '@/components/Slider.vue'
import navbar from '@/components/Header.vue'

export default {
  components: {
    'slider': slider,
    'navbar': navbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
