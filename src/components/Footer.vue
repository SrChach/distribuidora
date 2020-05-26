<template>
    <div class="footer has-background-light">
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
                    <form class="contact-form" @submit.prevent="sendEmail">
                        <h2><b> Cotizacones O Informacion , Contactanos:</b></h2>
                        <span>Mandanos un Correo con tus datos y nos comunicaremos contigo a la brevedad.</span>
                        <br>
                        <br>

                        <label>Nombre</label>
                        <input class="input is-focused" type="text" name="user_name" placeholder="Nombre">
                        <br>
                        <label>Telefono</label>
                        <input class="input is-focused" type="number" name="user_name" placeholder="Telefono">

                        <br>
                        <label>Correo</label>
                        <br>
                        <input class="input is-focused" type="text" name="user_email">

                        <label>Mensaje</label>
                        <br>
                        <textarea class="textarea" name="message"></textarea>
                        <br>
                        <input type="submit" value="Send">
                    </form>
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
    },
    methods:
        {

        }
}
</script>
<style>

    .footer{
        background-color: #DAEAA7

    }



</style>