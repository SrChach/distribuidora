<template>
    <footer class="footer" id="footer">
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
                            Enviar
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </footer>
</template>

<script>
import mymap from '@/components/Map.vue'
export default {
    components: {
        'my-map': mymap
    },
    data(){
        return {
            nombre: '',
            correo: '',
            mensaje: '',
            telefono: ''
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