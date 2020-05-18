<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="image" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{ product }}</p>
                    <p class="subtitle is-6">${{ price }}</p>
                </div>
            </div>

            <div class="content">
                {{ description }}
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            default: 'https://bulma.io/images/placeholders/1280x960.png'
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
            default: 11.10
        }
    }
}
</script>