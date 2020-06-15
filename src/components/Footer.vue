<template>
    <footer class="footer" id="footer">
        <div class="container">
            <div class="columns is-mobile is-centered">
                <div class="column is-12" style="height: 120px">
                    <center>
                        <h2>Siguenos en nuestras redes sociales</h2>
                        <div>
                            <a class="bigFuntion" href="https://api.WhatsApp.com/send?phone=+5215519606577" target="_blank">
                                <font-awesome-icon :icon="icons['faWhatsappSquare']" size="3x" :style="{color: 'green'}"/>
                            </a>
                            <a class="bigFuntion" href="https://www.facebook.com/Distribuidora-Conchita-136746656733647/" target="_blank" :style="{color: 'blue'}">
                                <font-awesome-icon :icon="icons['faFacebookSquare']" size="3x"/>
                            </a>
                            <a class="bigFuntion" href="https://www.instagram.com/distribuidoraconchitaoficial/" target="_blank">
                                <font-awesome-icon :icon="icons['faInstagramSquare']" size="3x" :style="{color:'deeppink'}"/>
                            </a>
                        </div>
                    </center>
                </div>
            </div>
        </div>
        <br>
        <div class="container">
            <div class="columns">
                <div class="column is-6">
                    <h2><b>Visítanos en:</b></h2>
                    <span>
                        Mercado Jamaica Zona, local 276, Jamaica, Venustiano Carranza, 15800 Ciudad de México
                    </span>
                    <my-map :coordinates="[19.408495, -99.122652]"/>
                </div>

                <div class="column is-6">
                    <form class="contact-form" @submit.prevent="funcion(nombre,correo,mensaje, telefono)">
                        <h2><b> Cotizacones O Informacion , Contactanos:</b></h2>
                        <span>Mandanos un Correo con tus datos y nos comunicaremos contigo a la brevedad.</span>
                        <br><br>

                        <label>Nombre</label>
                        <input
                            class="input is-focused" type="text" placeholder="Tu nombre"
                            v-model="nombre" required
                        />

                        <label>Telefono</label>
                        <input
                            class="input is-focused" type="number" placeholder="Tu teléfono"
                            v-model="telefono"
                        />

                        <label>Correo</label>
                        <input
                            class="input is-focused" type="email" placeholder="ejemplo@correo.com"
                            v-model="correo"
                        />

                        <label>Mensaje</label>
                        <textarea
                            class="textarea is-focused" type="text" placeholder="Escribe tus mensajes, recomendaciones o pedidos aquí"
                            v-model="mensaje" required
                        />
                        <br>

                        <button type="submit" class="button is-warning is-fullwidth">
                            <b>Enviar</b>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import mymap from '@/components/Map.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsappSquare, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

export default {
    components: {
        'my-map': mymap,
        'font-awesome-icon': FontAwesomeIcon
    },
    data(){
        return {
            nombre: '',
            correo: '',
            mensaje: '',
            telefono: '',
            icons: { faWhatsappSquare, faFacebookSquare, faInstagramSquare }
        }
    },
    methods: {
        funcion(nombre, correo, mensaje, telefono) {
            if (correo == '' && telefono == '') {
                this.$buefy.dialog.alert({
                    title: 'Sin modo de contacto',
                    message: 'Necesitas dejar algún en el cual podamos contactarte!',
                    type: 'is-warning'
                })
                return;
            }

            this.$store.dispatch('send_mail', {
                nombre: nombre,
                telefono: telefono,
                correo: correo,
                mensaje: mensaje
            })
            .then(() => {
                this.$buefy.dialog.alert({
                    message: 'Correo enviado. Pronto nos pondremos en contacto con usted!',
                    type: 'is-success'
                })

                this.nombre = ''
                this.correo = ''
                this.mensaje = ''
                this.telefono = ''
            })
            .catch((error) => alert(error))
        }
    }
}
</script>

<style scoped>
.bigFuntion{
    color: white;
    padding: .7rem;
    display: inline-block;
}

.fa-3x:hover{
    transition: all .5s;
    transform: scale(1.3);
}
</style>