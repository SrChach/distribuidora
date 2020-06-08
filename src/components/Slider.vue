<template>
    <div class="about" id="top">
        <b-carousel>
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section :class="`hero is-medium is-${carousel.color}`">
                    <div class="image is-3by1">
                        <img :src="carousel.rutaImage" alt="">
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
                { text: 'Pollo', rutaImage: require('../assets/carrusel/img_uno.jpg') },
                { text: 'Alternativo', rutaImage: require('../assets/carrusel/carne_pimientos.jpeg') },
                { text: 'Huevos', rutaImage: require('../assets/carrusel/img_dos.jpeg') },
                { text: 'Carne', rutaImage: require('../assets/carrusel/img_tres.jpeg') },
                { text: 'Pescado', rutaImage: require('../assets/carrusel/img_cuatro.jpeg') }
            ]
        }
    }
}
</script>