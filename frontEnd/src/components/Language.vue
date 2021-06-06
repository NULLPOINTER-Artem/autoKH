<template>
    <div class="languages">
        <div class="selectedItem">
            <div class="selected">
                <span>{{ selectedItem.lang }}</span>
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
            v-for="item in items"
            :key="item.id"
            @click="selectItem(item.id)">
                <span>{{ item.lang }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Language',
    data() {
        return {
            selectedItem: {},
            items: [
                {id: 1, lang: 'ru'},
                {id: 2, lang: 'ua'},
                {id: 3, lang: 'en'},
            ],
            showMenu: false,
        }
    },
    mounted() {
        this.selectedItem = this.items ? function() {
            const defLang = this.items[0];
            this.items = this.items.filter((item) => item.id !== defLang.id);
            return defLang;
        }.bind(this)() : 'None';
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
        selectItem(id) {
            this.items.push(this.selectedItem);
            this.selectedItem = this.items.find((item) => item.id === id);
            this.items = this.items.filter((item) => item.id !== id);
            this.toggleMenu();
        },
    },
}
</script>

<style lang="scss" scoped>
.languages {
    width: 40%;
    height: 70%;

    position: relative;

    .selectedItem {
        width: 100%;
        
        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid #374961;
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

        border-left: 1px solid #374961;
        border-right: 1px solid #374961;
        border-bottom: 1px solid #374961;
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