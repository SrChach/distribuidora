<template>
    <div>
        <div :style="'height: ' + nav_height + 'px'"></div>
        <b-navbar class="animacion" fixed-top id="navv" ref="navv">
            <template slot="brand">
                <b-navbar-item id="brandd" ref="brandd">
                    <img class="logo" src="../assets/LogoHeader.jpeg" alt="LogoHeader">
                </b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item >
                    <router-link :class="currentPage == '/' ? 'active' : ''" to="/#products">
                        <font-awesome-icon :icon="faUtensils"/> Productos
                    </router-link>
                </b-navbar-item>
                <b-navbar-item >
                    <router-link :class="currentPage.includes('about') ? 'active' : ''" to="/about#about">
                        <font-awesome-icon :icon="faAddressCard"/> Mas informacion
                    </router-link>
                </b-navbar-item>
                <b-navbar-item>
                    <a href="#footer" title="Contact"><font-awesome-icon :icon="faPhone"/> Contactanos </a>
                </b-navbar-item>
            </template>
        </b-navbar>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'

export default {
    components: {
        'font-awesome-icon': FontAwesomeIcon
    },
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
        }, 3000);
    },
    destroyed: function () {
        window.addEventListener("resize", this.calculateHeight);
    },
    data: function () {
        return {
            nav_height: 0,
            faPhone,
            faUtensils,
            faAddressCard
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