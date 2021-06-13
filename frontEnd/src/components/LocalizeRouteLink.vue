<template>
    <router-link :to="linkTo()">
        <slot />
    </router-link>
</template>

<script>
import storageHelper from '@/helpers/persistentStorage.js';

export default {
    name: 'LocalizeRouteLink',
    props: ['to'],
    methods: {
        linkTo() {
            if (typeof this.to !== 'string') {
                return this.to;
            }
            const locale = storageHelper.getItem('locale');
            return `/${locale}/${this.to.replace(/^\/|\/$/g, '')}`;
        },
    },
}
</script>

<style lang="scss" scoped>
</style>