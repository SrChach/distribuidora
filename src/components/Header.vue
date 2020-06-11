<template>
    <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
         <b-navbar class="borde" fixed-top>
            <template slot="brand">
                <b-navbar-item>
                        <img class="logo" src="../assets/LogoHeader.jpeg" alt="LogoHeader"> 
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item >
                    <router-link class="animacion" :to="{path: '/'}">
                        <i class="fas fa-utensils"></i> Productos
                    </router-link>
                </b-navbar-item>
                <b-navbar-item >
                    <router-link class="animacion" :to="{ path: '/about'}">
                        <i class="far fa-address-card"></i> Mas informacion
                    </router-link>
                </b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item>
                    <a class="animacion"  href="#footer" title="Contact"><i class="fas fa-phone"></i> Contactanos </a>
                </b-navbar-item>
            </template>
        </b-navbar>
        
        <!-- <nav>
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <label class="logo"> <img  src="../assets/LogoHeader.jpeg" alt="LogoHeader"></label>
            <ul>
                <li><a href="">Productos</a></li>
                <li><a href="">Mas informacion</a></li>
                <li><a href="">Contactanos</a></li>
            </ul>
        </nav> -->
    </div>
</template>

<script>

export default {
    methods: {
        myFunction () {
            var x = document.getElementById("myTopnav");
            if (x.className === "menu") {
                x.className += " responsive";
            } else {
                x.className = "menu";
            }
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
/* .navbar-start {
     margin-left: 25%;
} */
.navbar-burger {
    margin-left: auto;
    margin-right: 46.5%;
}
.responsive {
    max-width: 22%;
    height: auto;
    display: block;
    margin: auto;
}
/* .navbar-brand, .navbar-tabs {
    align-items: stretch;
    display: flex;
    flex-shrink: 0;
    min-height: 4rem;
} */
.navbar-item img {
    max-height: 4rem !important;
}
/* nav{
    background: rgb(107, 31, 228);
    height: auto;
    width: 100%;
} */

.logo{
    max-width: 5 rem;
    height: auto;
    display: inline-block;
    margin: 0 0.5rem;
}
/* 
nav ul{
    float: right;
    margin-right: 25%;
}
nav ul li{
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
}
nav ul li a{
    color: rgb(0, 0, 0);
    font-size: 17px;
    padding: 7px 13px;
    border-radius: 3px;
    text-transform: uppercase;
}
a.active,a:hover{
    background: yellow;
    transition: .5s;
}
.checkbtn{
    font-size: 30px;
    color: white;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor:pointer;
    display: none;
}
#check{
    display: none;
}
@media (max-width: 952px){
    label.logo{
        max-width: 22%;
        height: auto;
        display: block;
        margin: auto;
    }
    nav ul li a{
        font-size: 16px;
    }
}

@media (max-width: 858px){
    .checkbtn{
        display: block;
    }
    ul{
        position: fixed;
        width: 100%;
        height: 100vh;
        background: rgb(15, 212, 8);
        top: 80px;
        left: -100%;
        text-align: center;
        transition: all .5s;

    }
    nav ul li{
        display: block;
        margin: 50px 0;
        line-height: 30px;
    }
    nav ul li a{
        font-size: 20px;
    }
    a:hover, a:active{
        background: none;
        color:rgb(0, 0, 0);
    }
    #check:checked ~ ul{
        left: 0;
    } */
/* } */

@-webkit-keyframes up-underline {
    0% { padding: 22px 0px; }    
    100% { padding: 6px 0px; }
}
 
@-moz-keyframes up-underline {
    0% { padding: 22px 0px; }    
    100% { padding: 6px 0px; }
}
 
@-o-keyframes up-underline {
    0% { padding: 22px 0px; }    
    100% { padding: 6px 0px; }
}
 
@keyframes up-underline {
    0% { padding: 22px 0px; }    
    100% { padding: 6px 0px; }
}
 
@-webkit-keyframes down-underline {
    0% { padding: 6px 0px; }    
    100% { padding: 22px 0px; }
}
 
@-moz-keyframes down-underline {
    0% { padding: 6px 0px; }    
    100% { padding: 22px 0px; }
}
 
@-o-keyframes down-underline {
    0% { padding: 6px 0px; }    
    100% { padding: 22px 0px; }
}
 
@keyframes down-underline {
    0% { padding: 6px 0px; }    
    100% { padding: 22px 0px; }
}

body{
    margin:0;
}

.borde {
    text-align: center;
    line-height: 3.5;
    border-bottom: 4px solid #f69b67;

}
 
    .animacion{
        text-align: center;
        padding: 22px 0px;
        margin-right: auto;
        font-family: arial;
        font-size: 18px;
        text-decoration: none;
        color: #282929;
        border-bottom: 3px solid #f69b67;
         
        -webkit-animation: down-underline .4s;
        -moz-animation: down-underline .4s;
        -o-animation: down-underline .4s;
        animation: down-underline .4s;
 
        -webkit-transition: all .2s ease-in;
        -moz-transition: all .2s ease-in;
        -o-transition: all .3s ease-in;
        transition: all .3s ease-in;
    }
 
    .active, .animacion:hover{
        color: #00007c;
        padding: 6px 0px;
             
        -webkit-animation: up-underline .4s;
        -moz-animation: up-underline .4s;
        -o-animation: up-underline .4s;
        animation: up-underline .4s;
    }
 
    .animacion.active{
        padding: 6px 0;
    }
</style>