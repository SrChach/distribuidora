<template>
    <b-navbar type="is-primary" fixed-top close-on-click>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <figure class="image is-96x96">
                    <img
                        class="is-rounded"
                        src="@/assets/conchitalogo.jpeg"
                        alt="Logo de Distribuidora Conchita"
                    >
                </figure>
                <div class="ejemplo">
                    <b>
                        Distribuidora<br>Conchita
                    </b>
                </div>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/products' }">
                Productos
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Mas información
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="a" href="#footer">
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
</style>