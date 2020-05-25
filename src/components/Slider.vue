<template>
  <div class="about">
    <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`">
                <div class="hero-body has-text-centered">
                    <h1 class="title">{{carousel.text}}</h1>
                </div>
            </section>
        </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
export default {
    data(){
        return {
            carousels: [
                { text: 'Imagen 1', color: 'danger' },
                { text: 'Imagen 2', color: 'info' },
                { text: 'Imagen 3', color: 'primary' },
                { text: 'Imagen 4', color: 'success' },
                { text: 'Imagen 5', color: 'warning' }
            ]
        }
    }
}
</script>