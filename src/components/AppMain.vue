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
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
.quarterImg {
    width: 468px;
    height: 320px;
}

// ...qui eventuale SCSS di AppComponent
</style>