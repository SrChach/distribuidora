<template>
    <div class="container">
        <div class="columns is-vcentered margin-updown-2">
            <div class="column is-full-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd">
                <div class="slide1">
                    <div class="columns">
                        <div class="column">
                             <span class="title is-6 is-mega-menu-title">
                                    <p class="has-text-centered is-size-6-mobile">
                                        SOMOS:
                                    </p>
                                </span>
                            <a class="has-text-info is-size-6-mobile">
                                <p class="has-text-centered has-text-weight-bold">
                                    Empresa 100% mexicana
                                </p>
                            </a>
                            <a class="has-text-black is-size-7-mobile">
                                <p class="has-text-justified is-family-secondary p1margen">
                                    Somos una empresa con experiencia en la distribución de productos alimenticios.
                                    <br>
                                    Especializados en productos para Restaurantes Gourmet, Comedores industriales, hoteles y ventas de mayoreo.
                                    <br>
                                    Contando con más de 30 años de experiencia.
                                    <br>
                                    Ofreciendo un servicio de calidad en cada uno de nuestros productos, ya que sabemos  la importancia de una sana alimentación.
                                    En Distribuidora Conchita nos caracterizamos por ser una empresa comprometida con cada uno de nuestros clientes, ya que ofrecemos un servicio de calidad en la entrega de cada uno de nuestros productos .
                                    <br>
                                    <br>
                                    <br>
                                </p>

                            </a>
                        </div>
                        <div class="column">
                            <div class="column is-full-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd">
                                <br>
                                <figure class="image is-2by1">
                                    <img src="../assets/carrusel/img_cinco.jpeg" alt="imagen 5">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide3">

                </div>
                <div class="slide2">
                    <div class="columns">
                        <div class="column">
                               <span class="title is-6 is-mega-menu-title">
                                    <p class="has-text-centered is-size-6-mobile">
                                        Misión:
                                    </p>
                                </span>
                            <br>
                            <a class="has-text-black is-size-7-mobile">
                                    <p class="has-text-justified is-family-secondary p1margen">
                                        Ser la distribuidora líder en el mercado, buscando la excelencia en nuestros productos y servicios.
                                    </p>
                            </a>
                            <span class="title is-6 is-mega-menu-title">
                                 <p class="has-text-centered is-size-6-mobile">
                                        Visión:
                                 </p>
                            </span>
                            <a class="has-text-black is-size-7-mobile">
                                    <p class="has-text-justified is-family-secondary p1margen">

                                        <br>
                                        Ser una distribuidora reconocida por la alta calidad en nuestro productos alimenticios y por nuestro servicio puntual y oportuno,
                                        <br>
                                        Dejando así en nuestro clientes una buena experiencia de confiabilidad.
                                        <br>
                                        <br>
                                    </p>
                            </a>
                        </div>
                        <div class="column">
                            <div class="column is-full-mobile is-one-thrid-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd">
                                <figure class="image is-2by1">
                                    <img src="../assets/carrusel/img_dos.jpeg" alt="imagen 5">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide4">
                </div>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
            </div>
            <br>
            <br>
        </div>
    </div>
</template>

<style scoped>
.p1margen{
    padding-left: 1rem;
    padding-right: 1rem;
}

.margin-updown-2{
    margin-top: 2rem;
    margin-bottom: 2rem !important;
}

.slider {
    max-width: 300px;
    height: 200px;
    margin: 20px auto;
    position: static;
}
.slide1,.slide2,.slide3,.slide4,.slide5 {
    position: absolute;
    width: 100%;
    height: 100%;
}
.slide1 {
    animation:fade 10s infinite;
    -webkit-animation:fade 25s infinite;

}
.slide2 {
    animation:fade2 15s infinite;
    -webkit-animation:fade2 20s infinite;
}
.slide3 {
    animation:fade2 2s infinite;
    -webkit-animation:fade2 5s infinite;
}
.slide4 {
    animation:fade2 2s infinite;
    -webkit-animation:fade2 5s infinite;
}



@keyframes fade
{
    0%   {opacity:1}
    33.333% { opacity: 0}
    66.666% { opacity: 0}
    100% { opacity: 1}
}
@keyframes fade2
{
    0%   {opacity:0}
    33.333% { opacity: 1}
    66.666% { opacity: 0 }
    100% { opacity: 0}
}

</style>