<template>
    <div class="footer is-success has-text-light">
        <div class="container">
            <div class="columns">
                <div class="column is-6">
                    <h2><b>Visítanos en:</b></h2>
                    <span>
                        Mercado Jamaica Zona, local 276, Jamaica, Venustiano Carranza, 15800 Ciudad de México
                    </span>
                    <my-map :coordinates="[19.4066215, -99.1241711]"/>
                </div>

                <div class="column is-6">
                    Enviar Correo/Lo que quieras poner aqui
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import mymap from '@/components/Map.vue'

export default {
    components: {
        'my-map': mymap
    }
}
</script>