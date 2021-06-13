<template>
    <div class="footer">
        <div class="footer-item">
            <Language/>
        </div>
        <div class="footer-item">
            <div class="showInColumn phoneNumbers">
                <div>
                    <span>(065)443-3443</span>
                </div>
                <div>
                    <span>(065)443-3443</span>
                </div>
                <div>
                    <span>(065)443-3443</span>
                </div>
            </div>
        </div>
        <div class="footer-item">
            <div class="showInCenter">
                <a class="social-link" href="/#" target="_blank"><img src="./../assets/socialNetwork/instagram.png" alt="instagram"></a>
                <a class="social-link" href="/#" target="_blank"><img src="./../assets/socialNetwork/instagram.png" alt="instagram"></a>
                <a class="social-link" href="/#" target="_blank"><img src="./../assets/socialNetwork/instagram.png" alt="instagram"></a>
            </div>
        </div>
        <div class="footer-item">
            <div class="showInColumn">
                <img class="logo" src="./../assets/logo.png" alt="logo"/>
                <div>
                    <span>@ 2021 BROSTO. All Rights Reserved.</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Language from '@/components/Language.vue';

export default {
    name: 'Footer',
    components: {
        Language,
    },
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 15vh;
    overflow-y: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    border-top: 3px solid #390900;
    background-color: #f2f3f4;

    font-weight: 600;

    &-item {
        width: 25%;
        height: 100%;
        padding: 1% 0;

        display: flex;
        justify-content: center;
        align-items: center;

        .logo {
            width: 20%;
        }

        .social-link {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 50%;
            }
        }

        .showInColumn {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .showSpacebetween {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .showInCenter {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .phoneNumbers {
            div {
                margin: 1.5% 0;
            }
        }
    }
}
</style>