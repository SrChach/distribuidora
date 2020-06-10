<template>
    <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <nav class="menu" >
            <a href="#" class="active" title="Home" ><i class="far fade-enter-active"></i> Productos </a>
            <a href="about" title="About"><i class="far fa-address-card"></i> Mas Informacion </a>
            <a href="#footer" title="Contact"><i class="fas fa-mobile-alt"></i> Contactanos </a>
            <a href="javascript:void(0);" class="icon" @submit.prevent="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </nav>
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
        },
        myFunction () {
            var x = document.getElementById("myTopnav");
            if (x.className === "menu") {
                x.className += " responsive";
            } else {
                x.className = "menu";
            }
        } 
    }
    
}
</script>

<style>
.navbar-burger {
    margin-left: auto;
    margin-right: auto;
}
.responsive {
    max-width: 22%;
    height: auto;
    display: block;
    margin: auto;
}
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

@media screen and (max-width: 600px) {
  .menu a:not(:first-child) {display: none;}
  .menu a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .menu .responsive {position: relative;}
  .menu .responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .menu .responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
body{
    margin:0;
}
.menu .icon {
  display: none;
}
.menu{
    text-align: center;
    line-height: 3.5;
    border-bottom: 4px solid #1010d1;

}
 
    .menu a{
        padding: 22px 0px;
        margin-right: 40px;
        font-family: arial;
        font-size: 18px;
        text-decoration: none;
        color: #282929;
        border-bottom: 3px solid #1010d1;
         
        -webkit-animation: down-underline .4s;
        -moz-animation: down-underline .4s;
        -o-animation: down-underline .4s;
        animation: down-underline .4s;
 
        -webkit-transition: all .2s ease-in;
        -moz-transition: all .2s ease-in;
        -o-transition: all .3s ease-in;
        transition: all .3s ease-in;
    }
 
    .menu a:hover{
        color: #00007c;
        padding: 6px 0px;
             
        -webkit-animation: up-underline .4s;
        -moz-animation: up-underline .4s;
        -o-animation: up-underline .4s;
        animation: up-underline .4s;
    }
 
    .menu a.active{
        padding: 6px 0;
    }
</style>