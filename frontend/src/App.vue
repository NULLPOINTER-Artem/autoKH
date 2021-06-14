<template>
    <div id="app">
        <Navbar/>

        <router-view/>

        <Footer/>
    </div>
</template>

<script>
import { Trans } from '@/plugins/Translation.js'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
    name: 'Home',
    components: {
        Navbar,
        Footer,
    },
    created() {
        const locale = Trans.checkCookieOnSelectedLanguage();

        if (locale) {
            Trans.changeLocale(locale).then(() => {
                this.$router.push(Trans.i18nRoute({ name: 'Home' }))
            })
        }
    },
}
</script>

<style lang="scss">
#app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #181818;
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