<template>
  <div id="app">
    <div>
      <navbar/>
      <slider/>
    </div>
    <div id="main-content">
      <router-view/>
    </div>
    <custom-footer/>
  </div>
</template>

<script>
import slider from '@/components/Slider.vue'
import navbar from '@/components/Header.vue'
import footer from '@/components/Footer.vue'

export default {
  components: {
    'slider': slider,
    'navbar': navbar,
    'custom-footer': footer
  }
}
</script>

<style lang="scss">
  @import '@/styles/main.scss';
</style>
