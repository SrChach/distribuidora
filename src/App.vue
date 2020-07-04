<template>
  <div id="app">
    <div>
      <navbar/>
      <slider/>
    </div>
    <div id="main-content">
      <modal-en-construccion/>
      <router-view/>
    </div>
    <custom-footer/>
  </div>
</template>

<script>
/**Components */
import slider from '@/components/Slider.vue'
import navbar from '@/components/Header.vue'
import footer from '@/components/Footer.vue'

/**Only gh-pages components */
import EnConstruccion from '@/components/EnConstruccion.vue'

export default {
  components: {
    'slider': slider,
    'navbar': navbar,
    'custom-footer': footer,
    'modal-en-construccion': EnConstruccion
  }
}
</script>

<style lang="scss">
  @import '@/styles/main.scss';
</style>
