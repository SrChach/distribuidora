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
                { text: 'Pollo', rutaImage: require('../assets/carrusel/img_cinco.jpeg') },
                { text: 'Huevos', rutaImage: require('../assets/carrusel/2.png') },
                { text: 'Carne', rutaImage: require('../assets/carrusel/3.png') },
                { text: 'Pescado', rutaImage: require('../assets/carrusel/4.png') },
                { text: 'Pescado', rutaImage: require('../assets/carrusel/img_uno.jpg') },
                { text: 'Pescado', rutaImage: require('../assets/carrusel/6.png') },
                { text: 'Pescado', rutaImage: require('../assets/carrusel/7.png') },
                { text: 'Pescado', rutaImage: require('../assets/carrusel/8.png') }


            ]
        }
    }
}
</script>