<template :key="lang">
    <div id="app">
        <Navbar/>

        <router-view/>

        <Footer/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import {
    localizeGetterTypes,
} from '@/store/modules/localize.js'

export default {
    name: 'Home',
    components: {
        Navbar,
        Footer,
    },
    computed: {
        ...mapGetters({
            lang: localizeGetterTypes.getLocale,
        }),
    },
}
</script>

<style lang="scss">
#app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #374961;
}

::-webkit-scrollbar {
    width: 0;
    background: transparent;  
}

::-webkit-scrollbar-thumb {
    width: 0;
    background: transparent;
}
</style>