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
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #832019;
$primary-invert: findColorInvert($primary);
$warning: #E3BE2C;
$warning-invert: findColorInvert($warning);
$success: #50871F;
$success-invert: findColorInvert($success);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);
$footer-color: true;
$footer-background-color: $light;
// $footer-background-color: #DAEAA7;

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html {
  scroll-behavior: smooth;
}

@import '@creativebulma/bulma-divider'
</style>
