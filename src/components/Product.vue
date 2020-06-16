<template>
        <div :class="['box-wrapper', `resaltado-${category}`]" :style="`background-color: ${color}`">
            <figure class="image is-4by5">
                <img :src="require(`@/assets/${image}`)" alt="rhcp" />
            </figure>
            <div class="box-content" :style="`background-color: ${color}`">
                <div class="title">{{ product }}</div>
                <div class="desc">{{ category }}</div>
                <!-- <span class="price">{{ price }}</span> -->
            </div>
        </div>
</template>

<script>
export default {
    data: function () {
        return {
            expanded: false
        }
    },
    props: {
        image: {
            type: String,
            default: 'stockCatalogo/pescado/Salmon.jpg'
        },
        product: { type: String, default: 'Chili Papers' },
        category: { type: String, default: 'Pescado' },
        price: { type: [String, Number], default: '5.67$' },
        color: { type: String, default: '#faff81' }
    }
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Satisfy);
@import url(https://fonts.googleapis.com/css?family=Acme);

@import '@/styles/components/_product.scss';

.box-wrapper {
    overflow: hidden;
    padding: 0;
    text-align: center;

    // &:hover {
    //     box-shadow: 0px 5px 43px rgba( 0, 0, 0, 0.48 );
    // }

    img {
        width: 100%;
    }
}

.title {
    font-size: 2em;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0;
    font-family: 'Acme', sans-serif;
}

.desc {
    font-family: 'Satisfy', cursive;
    font-size: 1.2em;
    margin-bottom: 1rem;
}

@media only screen and (max-width: 1023px) {
    .title {
        font-size: 1.5rem;
        font-weight: 400;
    }

    .desc {
        font-size: 1em;
    }
}

.box-content{
    position: relative;
    z-index: 1;

    &:before {
        content: '';
        width: 200%;
        height: 100px;
        position: absolute;
        display: block;
        background-color: inherit;
        transform: rotate(-8deg);
        top: -50px;
        left: -10%;
        z-index: -1;
    }

    .price {
        font-size: 2em;
        font-weight: 900;
        display: block;
        width: 100px;
        margin: 20px auto 0;
        position: relative;
        font-family: 'Satisfy', cursive;

        &:after,
        &:before {
            content: '';
            height: 1px;
            width: 50px;
            display: block;
            position: absolute;
            background-color: #ddd;
            top: 18px;
        }

        &:before {
            left: -50px;
        }

        &:after {
            right: -50px;
        }
    }
}
</style>