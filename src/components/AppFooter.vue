<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppFooter",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppFooter does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 footerText">
                <div class="row">
                    <div class="col-4">
                        <h4>FIND OUR RESTAURANTS</h4>
                        <p>204 E. Pizzetta Tommaso
                            Sorrento, AZ 85022
                            (358) 867-1010</p>
                        <p>1614 E. Bell Rd #104.
                            Salerno, AZ 85022
                            (602) 867-1010</p>
                        <p>Vale Puglia 54
                            Torre Del Greco AZ 85022
                            (359) 867-1010</p>
                        <p>Corso Itali AA
                            Naples, AZ 85022
                            (989) 867-1010</p>
                    </div>
                    <div class="col-4">
                        <h4>FIND OUR RESTAURANTS</h4>
                        <h5>MONDAY</h5>
                        <p>Kitchen Closed</p>
                        <h5>TUESDAY UNTIL FRIDAY</h5>
                        <p>9:00 – 22:00</p>
                        <h5>SATURDAY</h5>
                        <p>Saturday 11am to midnight</p>
                        <h5>SUNDAY</h5>
                        <p>9:00 – 22:00</p>
                        <h5>FOLLOW US:</h5>
                        <p>icone</p>
                    </div>
                    <div class="col-4">
                        <h3>THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAKED SLICE OF PIZZA.</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col copyright">© 2020 Qode Interactive</div>
                </div>

            </div>
            <div class="col-6">
                <img class="w-100" src="/public/img/footer-img-1.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
.footerText {
    padding: 8rem 5rem 0 5rem;
}

.copyright {
    margin-top: 8rem;
}

// ...qui eventuale SCSS di AppComponent
</style>