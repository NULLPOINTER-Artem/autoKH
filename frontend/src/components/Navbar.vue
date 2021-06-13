<template>
    <div class="nav">
        <div class="nav-item">
            <router-link :to="$i18nRoute({ name: 'Home' })">
                {{ $t('navbar.home') }}</router-link>
        </div>
        <div class="nav-item">
            <router-link :to="$i18nRoute({ name: 'Services' })">
                {{ $t('navbar.services') }}</router-link>
        </div>
        <div class="nav-item">
            <router-link :to="$i18nRoute({ name: 'Contacts' })">
                {{ $t('navbar.contacts') }}</router-link>
        </div>
        <div class="nav-item">
            <router-link :to="$i18nRoute({ name: 'About' })">
                {{ $t('navbar.about') }}</router-link>
        </div>
        <div class="nav-item">
            <router-link :to="$i18nRoute({ name: 'Works' })">
                {{ $t('navbar.works') }}</router-link>
        </div>
        <div class="nav-item">
            <router-link 
                to="/log"
                custom
                v-slot="{ navigate }">
                <span @click="navigate" role="link">
                    <img src="./../assets/userAcc.png" alt="userAcc">
                </span>
            </router-link>
        </div>
        <div class="nav-item">
            <Language/>
        </div>
    </div>
</template>

<script>
import Language from '@/components/Language.vue';

export default {
    name: 'Navbar',
    components: {
        Language,
    },
    data() {
        return {
        }
    },
    computed: {
    },
}
</script>

<style lang="scss" scoped>
.nav {
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fcfcfc;
    font-weight: 600;

    position: sticky;
    top: 0;
    
    a {
        color: #181818;
        margin: 0 5px;
    }

    a.router-link-exact-active {
        position: relative;
        color: #390900;
        transition: all 0.5s;
    }

    a.router-link-exact-active::after {
        background-image: url('./../assets/logo.png');
        background-size: 20px 20px;
        width: 20px;
        height: 20px; 
        background-repeat: no-repeat;
        display: inline-block;
        vertical-align: middle;
        margin: 0 0 2px 5px;
        content: '';
        animation: fadeUp 0.5s;
    }

    @keyframes fadeUp {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    border-bottom: 2px solid #390900;

    &-item {
        width: 12%;
        padding: .5% 0;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 30%;
            cursor: pointer;
            display: inline-block;
            vertical-align: middle;
            margin: 0 0 5% 0;
        }
    }
}
</style>