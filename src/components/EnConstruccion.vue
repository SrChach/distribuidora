<template>
    <b-modal :active.sync="is_modal_active">
        <div class="container">
            <div class="columns is-centered">
            <div class="column is-10">
                <div class="card bg-white">
                <header class="card-header">
                    <p class="card-header-title has-text-danger">
                        Advertencia
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        La página real se encuentra bajo construcción.<br>
                        Los datos aquí mostrados <b>son ficticios</b>, y deberán usarse <b>SOLO</b> como referencia.
                    </div>
                </div>              
                </div>
            </div>
            </div>
        </div>
    </b-modal>
</template>

<script>
export default {
    data: function () {
        return {
            is_modal_active: false
        }
    },
    mounted: function () {
        this.is_modal_active = true
    }
}
</script>