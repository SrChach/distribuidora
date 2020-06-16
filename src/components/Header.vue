<template>
    <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        <div :style="'height: ' + nav_height + 'px'"></div>
        <b-navbar class="animacion" fixed-top id="navv" ref="navv">
            <template slot="brand">
                <b-navbar-item id="brandd" ref="brandd">
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
    created: function () {
        window.addEventListener("resize", this.calculateHeight);
    },
    mounted: function () {
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 500);

        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 1500);

        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 5000);
        
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 10000);
    },
    destroyed: function () {
        window.addEventListener("resize", this.calculateHeight);
    },
    data: function () {
        return {
            nav_height: 0
        }
    },
    methods: {
        calculateHeight() {
            this.nav_height = this.$refs.navv.$el.scrollHeight
        }
    },
    computed: {
        currentPage: function () {
            return this.$route.path
        }
    }
}
</script>

<style>
@import '../styles/components/_header.scss';
</style>