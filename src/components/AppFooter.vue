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
            <div class="col-6 footerText position-relative">
                <div class="row">
                    <div class="col-4">
                        <h4>FIND OUR RESTAURANTS</h4>
                        <div class="greyText">
                            <a class="d-block" href="#">1614 E. Bell Rd #104.</a>
                            <a class="d-block" href="#">Salerno, AZ 85022</a>
                            <a class="d-block" href="#">(602) 867-1010</a>
                        </div>
                        <div class="greyText">
                            <a class="d-block" href="#">204 E. Pizzetta Tommaso</a>
                            <a class="d-block" href="#">Sorrento, AZ 85022</a>
                            <a class="d-block" href="#">(358) 867-1010</a>
                        </div>
                        <div class="greyText">
                            <a class="d-block" href="#">Vale Puglia 54</a>
                            <a class="d-block" href="#">Torre Del Greco AZ 85022</a>
                            <a class="d-block" href="#">(359) 867-1010</a>
                        </div>
                        <div class="greyText">
                            <a class="d-block" href="#">Corso Itali AA</a>
                            <a class="d-block" href="#">Naples, AZ 85022</a>
                            <a class="d-block" href="#">(989) 867-1010</a>
                        </div>
                    </div>
                    <div class="col-4">
                        <h4>WORKING HOURS</h4>
                        <h5>MONDAY</h5>
                        <p class="redText">Kitchen Closed</p>
                        <h5>TUESDAY UNTIL FRIDAY</h5>
                        <p class="greyText">9:00 – 22:00</p>
                        <h5>SATURDAY <span class="redText">*</span></h5>
                        <p class="greyText">Saturday 11am to midnight</p>
                        <h5>SUNDAY</h5>
                        <p class="greyText">9:00 – 22:00</p>
                        <h5 class="d-inline-block">FOLLOW US:</h5>
                        <span>
                            <a href="#"><font-awesome-icon class="px-1 socialIcons" icon="fa-brands fa-twitter" /></a>
                            <a href="#"><font-awesome-icon class="px-1 socialIcons" icon="fa-brands fa-facebook" /></a>
                            <a href="#"><font-awesome-icon class="px-1 socialIcons" icon="fa-brands fa-instagram" /></a>
                            <a href="#"><font-awesome-icon class="px-1 socialIcons" icon="fa-brands fa-linkedin" /></a>
                        </span>
                    </div>
                    <div class="col-4 pe-4 ps-3">
                        <h3>THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAKED SLICE OF PIZZA.</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col copyright"><span class="goldenText">© 2020</span> Qode Interactive</div>
                </div>
                <img class="footerRightImg" src="/img/footer-bottom-img.png" alt="">

            </div>
            <div class="col-6 ps-0 pe-0">
                <img class="w-100" src="/img/footer-img-1.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
.footerText {
    padding: 8rem 5rem 0 5rem;
    background-image: url(/img/cielostellato.PNG);
    background-size: cover;
}

.copyright {
    margin-top: 8.5rem;
    color: #339966;
    font-size: 0.8rem;
}

h5,
h4 {
    color: #b68a2c;
    font-size: 1.1rem;
    font-weight: 600;
}

h3 {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2rem;
}

h5 {
    font-size: 0.8rem;
}

.redText {
    color: #d2401e;
}

.greyText {
    color: #8f8f8f;
    margin-bottom: 2rem;
    font-size: 0.95rem;
}

a {
    text-decoration: none;
    color: #8f8f8f;
}

span>a {
    color: white;
}

a:hover {
    transition: 600ms;
    color: #b68a2c;
}

.goldenText {
    color: #b68a2c;
}

.footerRightImg {
    position: absolute;
    bottom: 3rem;
    right: 3.3rem;
    cursor: pointer;
}

// ...qui eventuale SCSS di AppComponent
</style>