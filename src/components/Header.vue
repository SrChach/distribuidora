<template>

    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
            </a>
        </div>

        <div class="navbar-item has-dropdown is-hoverable is-mega">
            <div class="navbar-link">
                Quienes somos
            </div>
            <div id="blogDropdown" class="navbar-dropdown">
                <div class="container is-fluid">
                    <QuienesSomos/>
                </div>
            </div>
        </div>
    </nav>

</template>

<script>
import QuienesSomos from '@/components/QuienesSomos.vue'

export default {
    components: {
        'QuienesSomos': QuienesSomos
    }    
}
</script>


<style>
.navbar-item.is-mega {
	position: static;
}

.navbar-item.is-mega .is-mega-menu-title {
	margin-bottom: 0;
	padding: 0.375rem 1rem;
}
</style>