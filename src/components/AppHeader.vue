<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppHeader does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <header>
        <div class="container headerWrapper">
            <div class="row d-flex align-items-center">
                <div class="col-2">
                    <button id="orderBtn">ORDER ONLINE</button>
                </div>
                <div class="col-8 text-center">
                    <a href="#"><img class="mustache" src="/public/svg/svg-0.svg" alt="">HOME</a>
                    <a href="#">PAGES</a>
                    <a href="#">MENU</a>
                    <img class="headerLogo" src="/public/img/h5-logo-divided-header.png" alt="">
                    <a href="#">EVENT</a>
                    <a href="#">BLOG</a>
                    <a href="#">LANDING</a>
                </div>
                <div class="col-2">
                    <a class="p-0" href="#"><img class="cartIcon" src="/public/svg/svg-1.svg" alt="">CART</a>
                    <a class="p-0" href="#"><font-awesome-icon class="magnifyingGlassIcon"
                            icon="fa-solid fa-magnifying-glass" />SEARCH</a>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
a {
    text-decoration: none;
    color: inherit;
    padding: 0 1.5rem;
    font-size: 0.8rem;
    font-weight: 600;
}

.magnifyingGlassIcon {
    font-size: 1rem;
    padding: 0 0.3rem 0 1rem;
}

.cartIcon {
    filter: invert(1);
    padding: 0 0.4rem;
    margin-bottom: 0.2rem;
}

.mustache {
    height: 0.6rem;
    filter: invert(1);
    padding-right: 0.3rem;
    margin-bottom: 0.2rem;
}

.headerLogo {
    width: 20%;
}

.headerWrapper {
    padding: 2rem;
}

header {
    background-image: url(../../public/img/cielostellato.PNG);
    background-position: bottom;
}

#orderBtn {
    /*Reset*/
    display: inline-block;
    outline: none;
    background-color: white;

    /*Some fancy stuff*/
    line-height: 200%;
    border: 0;
    /*Magic*/
    background-image: linear-gradient(#d2401e, #d2401e 50%, #c83b1a 50%, #c83b1a);
    background-size: 100% 200%;
    transition: background-position .3s;
    color: white;
    padding: 0.5rem 1.6rem;
    font-size: 0.8rem;
    font-weight: 600;

    &:hover {
        background-position: 0 100%;
    }
}

// ...qui eventuale SCSS di AppComponent
</style>