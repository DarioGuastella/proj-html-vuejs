<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import Slider from "./Slider.vue"

export default {
    name: "AppMain",
    components: {
        Slider
    },
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppMain does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <!-- JUMBO -->
    <Slider /><!-- ToDo: slider content e fade -->
    <!-- SEZIONE 1 -->
    <section class="container-fluid bg-light py-2 w-100"> <!-- ToDo: hover -->
        <div class="row">
            <div class="col-3 px-2"><img class="quarterImg" src="/img/h3-img-1.jpg" alt=""></div>
            <div class="col-3 px-2"><img class="quarterImg" src="/img/h3-img-2.jpg" alt=""></div>
            <div class="col-3 px-2"><img class="quarterImg" src="/img/h3-img-3.jpg" alt=""></div>
            <div class="col-3 px-2"><img class="quarterImg" src="/img/h3-img-4.jpg" alt=""></div>
        </div>
    </section>
    <!-- SEZIONE 2 TESTIMONIALS -->
    <section class="container-fluid sectionBeige"><!-- ToDo: slider -->
        <div class="row">
            <div class="col-6 offset-md-3 text-center">
                <h2 class="quotesMark">“</h2>

            </div>
        </div>
    </section>
    <!-- SEZIONE 3 SPECIALS -->
    <section class="container-fluid sectionSpecials w-100">
        <div class="row w-100">
            <div class="col-6 relatived">
                <img class="specialsImg" src="/img/h1-img-4.jpg" alt="">
                <img class="specialsInsideImg" src="/img/h1-img-7n.png" alt="">
            </div>
            <div class="col-6">
                <div class="text-black specialsContent">
                    <h3 class="specialsTitles">SPECIALS*</h3>
                    <p class="specialsParag pb-4 fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesent
                        ut.</p>
                    <div class="d-flex">
                        <h4 class="specialsPrice">$10</h4>
                        <div class="ps-4">
                            <h4 class="specialsTitles">COMBO PICCOLO</h4>
                            <p class="specialsParag">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
                                veniam architecto.</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <h4 class="specialsPrice">$20</h4>
                        <div class="ps-4">
                            <h4 class="specialsTitles">COMBO MEZZO</h4>
                            <p class="specialsParag">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
                                veniam architecto.</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <h4 class="specialsPrice">$30</h4>
                        <div class="ps-4">
                            <h4 class="specialsTitles">COMBO GRANDE</h4>
                            <p class="specialsParag">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
                                veniam architecto.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- Sezione 4 PARALLAX --> <!--ToDo: fix parallax-->
    <section>
        <div class="container-fluid parallaxSection parallax">
            <div class="row">
                <div class="col-4 offset-md-2">
                    <h3 class="buildPizza">
                        GO AHEAD AND <br>
                        BUILD YOUR<br>
                        OWN PIZZA<br>
                        WE WON’T<br>
                        JUDGE!</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
//Sezione 1 - after jumbotron
.quarterImg {
    width: 468px;
    height: 320px;
}

//Sezione 2 - quotes slider
.quotesMark {
    font-size: 15rem;
    color: #b7903c;
    padding-top: 4rem;
}

.sectionBeige {
    background-image: url("/img/h3-testimonials-bckgrnd.jpg");
    height: 485px;
}

//Sezione 3 - Specials
.sectionSpecials {
    width: 1922px;
    height: 823px;
    background-color: white;
    padding: 0.8rem 0;
}

.relatived {
    position: relative;
}

.specialsImg {
    width: 100%;
    position: relative;
}

.specialsInsideImg {
    width: 40%;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.specialsContent {
    width: 40%;
    align-self: center;
    margin-left: 15rem;
    margin-top: 11rem;
    font-size: 1.2rem;
}

.specialsTitles {
    color: #303030;
    font-weight: 600;
}

.specialsPrice {
    color: #ab4027;
}

.specialsParag {
    color: #767676;
    font-size: 1rem;
}

//Sezione 4 - Parallax
.parallaxSection {
    background-image: url(/img/h3-background-img.jpg);
    height: 650px;
}

.buildPizza {
    font-size: 4rem;
    font-weight: 600;
    margin-top: 5rem;
    position: relative;
    left: 3rem;
}

.parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

// ...qui eventuale SCSS di AppComponent
</style>