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

<style>
    .navbar-burger {
        margin-left: auto;
        margin-right: 40%;
    }
    .responsive {
        max-width: 22%;
        height: auto;
        display: block;
        margin: auto;
    }
    .navbar-item img {
        max-height: 4rem !important;
    }
    .navbar-item, .navbar-link {
        color: #4a4a4a;
        display: block;
        line-height: 1.5;
        padding: 0rem 0.75rem !important;
        position: relative;
    }
    .logo{
        max-width: 5 rem;
        height: auto;
        display: inline-block;
        margin: 0 0.5rem;
    }

@-webkit-keyframes up-underline {
    0% { padding: 20px 0px; }    
    100% { padding: 6px 0px; }
}
 
@-moz-keyframes up-underline {
    0% { padding: 20px 0px; }    
    100% { padding: 6px 0px; }
}
 
@-o-keyframes up-underline {
    0% { padding: 20px 0px; }    
    100% { padding: 6px 0px; }
}
 
@keyframes up-underline {
    0% { padding: 20px 0px; }    
    100% { padding: 6px 0px; }
}
 
@-webkit-keyframes down-underline {
    0% { padding: 6px 0px; }    
    100% { padding: 20px 0px; }
}
 
@-moz-keyframes down-underline {
    0% { padding: 6px 0px; }    
    100% { padding: 20px 0px; }
}
 
@-o-keyframes down-underline {
    0% { padding: 6px 0px; }    
    100% { padding: 20px 0px; }
}
 
@keyframes down-underline {
    0% { padding: 6px 0px; }    
    100% { padding: 20px 0px; }
}

body{
    margin:0;
}

    .animacion {
        text-align: center;
        line-height: 3.5;
        border-bottom: 4px solid #f69b67;
    }

    .animacion a a {
        text-align: center;
        padding: 25px 0px;
        margin-right: auto;
        font-family: arial;
        font-size: 18px;
        text-decoration: none;
        color: #282929;
    }
 
    .active, .animacion a a:hover{
        color: #f69b67;
        padding: 6px 0px;
        border-bottom: 3px solid #f69b67;
        -webkit-animation: up-underline .4s;
        -moz-animation: up-underline .4s;
        -o-animation: up-underline .4s;
        animation: up-underline .4s;
    }
 
    .animacion a a.active{
        padding: 6px 0;
        color: #f69b67;
        border-bottom: 3px solid #f69b67;
    }
</style>