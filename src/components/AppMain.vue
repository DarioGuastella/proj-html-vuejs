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
    <Slider /><!-- ToDo: slider content e fade -->
    <section class="container-fluid bg-light py-2 w-100"> <!-- ToDo: hover -->
        <div class="row">
            <div class="col-3 px-2"><img class="quarterImg" src="/img/h3-img-1.jpg" alt=""></div>
            <div class="col-3 px-2"><img class="quarterImg" src="/img/h3-img-2.jpg" alt=""></div>
            <div class="col-3 px-2"><img class="quarterImg" src="/img/h3-img-3.jpg" alt=""></div>
            <div class="col-3 px-2"><img class="quarterImg" src="/img/h3-img-4.jpg" alt=""></div>
        </div>
    </section>
    <section class="container-fluid sectionBeige"><!-- ToDo: slider -->
        <div class="row">
            <div class="col-6 offset-md-3 text-center">
                <h2 class="quotesMark">“</h2>

            </div>
        </div>

    </section>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
//Sezione 3 - after jumbotron
.quarterImg {
    width: 468px;
    height: 320px;
}

//Sezione 4 - quotes slider
.quotesMark {
    font-size: 15rem;
    color: #b7903c;
    padding-top: 4rem;
}

.sectionBeige {
    background-image: url("/public/img/h3-testimonials-bckgrnd.jpg");
    height: 485px;
}

// ...qui eventuale SCSS di AppComponent
</style>