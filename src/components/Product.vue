<template>
    <div class="card">
        <div :class="custom_class">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img :src="require(`@/assets/${image}`)" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-5 has-text-centered">{{ product }}</p>
                    </div>
                </div>
                <div class="content">
                    {{ description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            default: 'default_1280x960.png'
        },
        product: {
            type: String,
            default: 'Nombre del producto'
        },
        description: {
            type: String,
            default: 'asdakjsh kas daksd ka hdkajh kda kdahkashdkahkd kad'
        },
        price: {
            type: Number,
            default: 1
        },
        category: {
            type: String,
            default: 'Pollo'
        },
        custom_class: {
            type: String,
            default: null
        }
    }
}
</script>

<style lang="scss">
    @import '@/styles/main.scss';
</style>
