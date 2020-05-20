<template>
  <div class="section">
    <div class="container">
      <div class="columns is-fluid is-multiline">
        <div v-for="(item, index) in cosas" :key="index"
          class="column is-3-widescreen is-5-desktop is-three-quarters-mobile"
          style="background-color: red; color: white"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      cosas: [
        'memoria',
        'taza',
        'gato',
        'no se jaja'
      ]
    }
  }
}
</script>