<template>
    <div id="app">
        <Navbar/>

        <router-view/>

        <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
    name: 'Home',
    components: {
        Navbar,
        Footer,
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