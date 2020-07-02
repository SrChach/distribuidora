<template>
  <div id="app">
    <div>
      <navbar/>
      <slider/>
    </div>
    <div id="main-content">

      <b-modal :active.sync="is_modal_active">
        <div class="container">
          <div class="columns is-centered">
            <div class="card column is-10 bg-white">
              <p class="title">
                La página real se encuentra bajo construcción.<br>
                Los datos aquí mostrados son ficticios, y deberán usarse SOLO como referencia.
              </p>
            </div>
          </div>
        </div>
      </b-modal>

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
  },
  data: function () {
    return {
      is_modal_active: false
    }
  },
  mounted: function () {
    this.is_modal_active = true
  }
}
</script>

<style lang="scss">
  @import '@/styles/main.scss';
</style>
