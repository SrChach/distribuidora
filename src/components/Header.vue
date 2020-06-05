<template>
    <b-navbar fixed-top close-on-click class="fondo" :transparent="true">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <figure class="image is-96x96">
                    <img
                        class="is-rounded"
                        src="@/assets/conchitalogo.jpeg"
                        alt="Logo de Distribuidora Conchita"
                    >
                </figure>
                <div class="ejemplo has-text-white is-size-4-desktop has-text-weight-bold texto-borde">
                    <b>
                        Distribuidora<br>Conchita
                    </b>
                </div>
            </b-navbar-item>
        </template>
        <template slot="start" :transparent="true">
            <b-navbar-item tag="router-link" :to="{ path: '/products' }"
            class="has-text-white is-size-5-desktop has-text-weight-bold texto-borde">
                    Productos
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/' }"
            class="has-text-white is-size-5-desktop has-text-weight-bold texto-borde">
                Mas información
            </b-navbar-item>
        </template>

        <template slot="end" :tranparent="true">
            <b-navbar-item tag="a" href="#footer"
            class="has-text-white is-size-5-desktop has-text-weight-bold texto-borde">
                <b>Contáctanos</b>&nbsp;&nbsp;
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style>
.navbar-item img {
    max-height: 6rem !important;
}

.ejemplo {
    padding-left: 1rem;
}
nav {
    background-image: url('../assets/navBar.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom: solid rgb(255, 255, 255) 0.5rem;
}
.texto-borde {
    -webkit-text-stroke: 0.07rem black;
    color: white; 
}
</style>