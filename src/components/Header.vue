<template>
    <div>
        <div class="container is-fluid">
            <div class="columns is-multiline">
                <div class="column is-12" style="padding-bottom: 0">
                    <figure class="image container is-96x96">
                        <img
                            class="is-rounded"
                            src="@/assets/conchitalogo.jpeg"
                            alt="Logo de Distribuidora Conchita"
                        >
                    </figure>
                </div>
                <div class="column is-12 has-text-centered" style="padding-top: 0">
                    <b>Distribuidora Conchita</b>
                </div>
            </div>
        </div>
        <b-navbar close-on-click :fixed-top="!is_top" type="is-info" id="nav">
            <template slot="start" :transparent="true">
                <b-navbar-item tag="router-link" :to="{ path: '/' }"
                class="is-size-5-desktop has-text-weight-bold">
                        Productos
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/about' }"
                class="is-size-5-desktop has-text-weight-bold">
                    Mas información
                </b-navbar-item>
            </template>

            <template slot="end" :tranparent="true">
                <b-navbar-item tag="a" href="#footer"
                class="is-size-5-desktop has-text-weight-bold">
                    <b>Contáctanos</b>&nbsp;&nbsp;
                </b-navbar-item>
            </template>
        </b-navbar>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            is_top: true
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            this.is_top = (window.scrollY <= 120) ? true : false;
        }
    }
}
</script>

<style>
/* .navbar-start a {
    top: 25%;
    height: 50%;
    border-right: 2px solid white;
}

.navbar-end a {
    top: 25%;
    height: 50%;
    border-left: 2px solid white;
} */

.navbar-burger {
    margin-left: auto;
    margin-right: auto;
}
</style>