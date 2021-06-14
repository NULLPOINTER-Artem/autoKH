<template>
    <div class="languages">
        <div class="selectedItem">
            <div class="selected">
                <span>{{ selectedItem }}</span>
            </div>
            <div>
                <img :class="[{'rotateWrench': showMenu}]" 
                src="./../assets/components/arrow.png" alt="arrow"
                @click="toggleMenu"/>                
            </div>
        </div>
        <div 
        :class="['itemsMenu', {'fullHeight': showMenu}, {'notFullHeight': !showMenu}]"
        >
            <div 
            class="itemsMenu-item" 
            v-for="item in supportedLocales"
            :key="item"
            @click="selectItem(item)">
                <span>{{ item }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { Trans } from '@/plugins/Translation.js'

export default {
    name: 'Language',
    data() {
        return {
            showMenu: false,
        }
    },
    computed: {
        supportedLocales() {
            return Trans.supportedLocales
        },
        selectedItem() {
            return Trans.currectLocale
        },
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
        selectItem(locale) {
            if (this.$i18n.locale !== locale) {
                const to = this.$router.resolve({ params: {locale} })
                
                Trans.changeLocale(locale).then(() => {
                    console.dir(to)
                    this.$router.push(to.location)
                    this.toggleMenu()
                })
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.languages {
    width: 150px;
    height: 70%;

    position: relative;

    .selectedItem {
        width: 100%;
        
        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid #390900;
        border-radius: 7%;

        div {
            width: 50%;
            display: flex;
            justify-content: flex-end;
        }

        .selected {
            width: 65%;
        }

        img {
            width: 20%;
            height: 12px;
            margin-right: 10%;
            transition: all 0.5s;
        }

        img:hover {
            cursor: pointer;
        }

        .rotateWrench {
            transform: rotate(90deg);
        }
    }
    .itemsMenu {
        width: 100%;

        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: flex-start;

        position: absolute;

        overflow-y: scroll;

        border-left: 1px solid #390900;
        border-right: 1px solid #390900;
        border-bottom: 1px solid #390900;
        border-bottom-left-radius: 7%;
        border-bottom-right-radius: 7%;

        &-item {
            width: 20%;

            display: flex;
            justify-content: center;
            align-items: center;

            margin-right: 5%;

            cursor: pointer;
        }

        &-item:last-child {
            margin-right: 0;
        }
    }

    @keyframes fullHeightBar {
        0% {
            height: 0%;
        }
        100% {
            height: 100%;
        }
    }

    @keyframes notFullHeightBar {
        0% {
            height: 100%;
        }
        100% {
            height: 0%;
        }
    }

    .fullHeight {
        height: 100%;
        animation: fullHeightBar 0.5s;
    }

    .notFullHeight {
        height: 0%;
        animation: notFullHeightBar 0.5s;
    }
}
</style>