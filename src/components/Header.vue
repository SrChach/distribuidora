<template>
    <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
         <b-navbar class="animacion" fixed-top>
            <template slot="brand">
                <b-navbar-item>
                        <img class="logo" src="../assets/LogoHeader.jpeg" alt="LogoHeader"> 
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item >
                    <router-link :class="currentPage == '/' ? 'active' : ''" to="/">
                        <i class="fas fa-utensils"></i> Productos
                    </router-link>
                </b-navbar-item>
                <b-navbar-item >
                    <router-link :class="currentPage.includes('about') ? 'active' : ''" to="/about">
                        <i class="far fa-address-card"></i> Mas informacion
                    </router-link>
                </b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item>
                    <a href="#footer" title="Contact"><i class="fas fa-phone"></i> Contactanos </a>
                </b-navbar-item>
            </template>
        </b-navbar>
    </div>
</template>

<script>
export default {
    methods: {

    },
    computed: {
        currentPage: function () {
            return this.$route.path
        }
    }
}
</script>

<style scoped>
@import '../styles/components/_header.scss';
</style>