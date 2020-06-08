<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="require(`@/assets/${image}`)" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">

                    <div class="media">
                        <!-- <div class="media-left" v-if="category_image != '' && typeof(category_image) === 'string'">
                            <figure class="image is-48x48">
                                <img :src="require(`@/assets/${category_image}`)" :alt="category + ' image'">
                            </figure>
                        </div> -->
                        <div class="media-content">
                            <p class="title is-5 has-text-centered">{{ product }}</p>
                        </div>
                    </div>


            <div class="content">
                {{ description }}
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
        category_image: {
            type: String,
            default: null
        }
    }
}
</script>
<style>

    .card:hover{
        box-shadow:
                0 0 0.1vw  0.4vw #fff7f7,
                0 0 0.4vw  0.6vw #e97272,
                0 0   4vw  0.4vw #e50b0b,
                inset 0 0 1.5vw  0.4vw #e50b0b,
                inset 0 0 0.4vw  0.2vw #e97272,
                inset 0 0 0.5vw  0.2vw #fff7f7;
    }

    .card-content{
        background-color: white;
    }

</style>
