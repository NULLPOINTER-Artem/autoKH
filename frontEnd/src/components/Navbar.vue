<template>
    <div class="nav">
        <div class="nav_up">
            <div class="nav_up-item">
                <img class="logo" src="./../assets/logo.png" alt="logo"/>
            </div>
            <div class="nav_up-item">
                <div class="message">
                    <h1>BROSTO</h1>
                    <div>
                        <span>The best auto service in your city!</span>
                    </div>
                </div>
            </div>
            <div class="nav_up-item">
                <div class="showInline">
                    <div class="phoneNumbers">
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
                    <div class="userAccount">
                        <img src="./../assets/userAcc.png" alt="userAcc"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav_down">
            <div class="nav_down-item">
                <router-link to="/">Home</router-link>
            </div>
            <div class="nav_down-item">
                <router-link to="/services">Services</router-link>
            </div>
            <div class="nav_down-item">
                <router-link to="/contacts">Contacts</router-link>
            </div>
            <div class="nav_down-item">
                <router-link to="/about">About</router-link>
            </div>
            <div class="nav_down-item">
                <router-link to="/works">Our Works</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    
    a {
        color: #FFFFFF;
        margin: 0 5px;
    }

    a.router-link-exact-active {
        position: relative;
        color: #db7743;
        transition: all 0.5s;
    }

    a.router-link-exact-active::before {
        content: '';
        position: absolute;
        width: 80%;
        bottom: 0;
        height: 2px;
        background-color: #fff;
        animation: lanzing 0.5s;
    }

    @keyframes lanzing {
        0% {
            width: 0;
        }
        100% {
            width: 80%;
        }
    }

    .nav_up {
        display:  flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f2f3f4;

        &-item {
            width: 33.3%;
            padding: 1% 0;

            display: flex;
            justify-content: center;
            align-items: center;

            .logo {
                width: 30%;
            }

            .message {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                h1 {
                    font-size: 24px;
                    font-weight: 800;
                    margin-bottom: 3%;
                }

                span {
                    font-size: 18px;
                }
            }

            .showInline {
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .phoneNumbers {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    div {
                        margin: 5% 0;
                    }
                }

                .userAccount {
                    display: flex;
                    justify-content: flex-end;

                    img {
                        width: 40%;
                    }
                    img:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .nav_down {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #374961;

        border-top: 1px solid #374961;
        border-bottom: 1px solid #374961;

        &-item {
            width: 10%;
            padding: .5% 0;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>