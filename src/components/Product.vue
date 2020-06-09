<template>
    <div class="card">
        <div :id="`${category}`">
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
        category_image: {
            type: String,
            default: null
        }
    }
}
</script>
<style>
    #res:hover{
        transition: .3s;
        box-shadow:
                0 0 0.1vw  0.4vw #fff7f7,
                0 0 0.4vw  0.6vw #e97272,
                0 0   4vw  0.4vw #e50b0b,
                inset 0 0 1.5vw  0.4vw #e50b0b,
                inset 0 0 0.4vw  0.2vw #e97272,
                inset 0 0 0.5vw  0.2vw #fff7f7;
    }
    #pollo:hover{
        transition: .3s;
        box-shadow:
                0 0 0.1vw  0.4vw #fff7f7,
                0 0 0.4vw  0.6vw #ecf535,
                0 0   4vw  0.4vw #e1CC2C,
                inset 0 0 1.5vw  0.4vw #e1CC2C,
                inset 0 0 0.4vw  0.2vw #ecf535,
                inset 0 0 0.5vw  0.2vw #fff7f7;
    }
    #fruta:hover{
        transition: .3s;
        box-shadow:
                0 0 0.1vw  0.4vw #F0FFF0,
                0 0 0.4vw  0.6vw #66FF66,
                0 0   4vw  0.4vw #008B00,
                inset 0 0 1.5vw  0.4vw #008B00,
                inset 0 0 0.4vw  0.2vw #66FF66,
                inset 0 0 0.5vw  0.2vw #F0FFF0;
    }
    #pescado:hover{
        transition: .3s;
        box-shadow:
                0 0 0.1vw  0.4vw #86EBFF,
                0 0 0.4vw  0.6vw #296d92,
                0 0   4vw  0.4vw #061487,
                inset 0 0 1.5vw  0.4vw #061487,
                inset 0 0 0.4vw  0.2vw #296d92,
                inset 0 0 0.5vw  0.2vw #86EBFF;
    }
    #verdura:hover{
        transition: .3s;
        box-shadow:
        0 0 0.1vw  0.4vw #8ee61a,
        0 0 0.4vw  0.6vw #449c08,
        0 0   4vw  0.4vw #005e08,
        inset 0 0 1.5vw  0.4vw #005e08,
        inset 0 0 0.4vw  0.2vw #449c08,
        inset 0 0 0.5vw  0.2vw #8ee61a;
    }
    #cerdo:hover{
        transition: .3s;
        box-shadow:
                0 0 0.1vw  0.4vw #f1b6ae,
                0 0 0.4vw  0.6vw #d66b5b,
                0 0   4vw  0.4vw #862023,
                inset 0 0 1.5vw  0.4vw #862023,
                inset 0 0 0.4vw  0.2vw #d66b5b,
                inset 0 0 0.5vw  0.2vw #f1b6ae;
    }
    .card-content {
        background-color: white;
    }
</style>
