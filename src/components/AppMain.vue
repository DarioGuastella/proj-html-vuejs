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
    <Slider />
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>