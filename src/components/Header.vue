<template>
    <b-navbar type="is-primary" fixed-top is-active>
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
            <div class="navbar-item has-dropdown is-hoverable is-mega">
                <div class="navbar-link">
                    Quienes somos
                </div>
                <div class="navbar-dropdown">
                    <div class="container is-fluid">
                        <QuienesSomos/>
                    </div>
                </div>
            </div>
        </template>
    </b-navbar>

</template>

<script>
import QuienesSomos from '@/components/QuienesSomos.vue'

export default {
    components: {
        'QuienesSomos': QuienesSomos
    }    
}
</script>


<style>
.navbar-item.is-mega {
	position: static;
}

.navbar-item.is-mega .is-mega-menu-title {
	margin-bottom: 0;
	padding: 0.375rem 1rem;
}
.navbar-item img {
    max-height: 6rem !important;
}

.ejemplo {
    padding-left: 1rem;
}
</style>