<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import Slider from "./Slider.vue"
import AppPizzaSlider from "./AppPizzaSlider.vue"
import SliderTestimonialsVue from "./SliderTestimonials.vue"

export default {
    name: "AppMain",
    components: {
        Slider,
        AppPizzaSlider,
        SliderTestimonialsVue
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
    <Slider />

    <!-- SEZIONE 1 -->
    <section class="container-fluid bg-light py-2 w-100">
        <div class="row">
            <div class="col-3 px-2 hoverContainer">
                <img class="quarterImg" src="/img/h3-img-1.jpg" alt="">
                <div class="middle">
                    <div class="text">
                        <span><font-awesome-icon :icon="['fas', 'eye']" /></span>
                    </div>
                </div>
            </div>
            <div class="col-3 px-2 hoverContainer">
                <img class="quarterImg" src="/img/h3-img-2.jpg" alt="">
                <div class="middle">
                    <div class="text">
                        <span><font-awesome-icon :icon="['fas', 'eye']" /></span>
                    </div>
                </div>
            </div>
            <div class="col-3 px-2 hoverContainer">
                <img class="quarterImg" src="/img/h3-img-3.jpg" alt="">
                <div class="middle">
                    <div class="text">
                        <span><font-awesome-icon :icon="['fas', 'eye']" /></span>
                    </div>
                </div>
            </div>
            <div class="col-3 px-2 hoverContainer">
                <img class="quarterImg" src="/img/h3-img-4.jpg" alt="">
                <div class="middle">
                    <div class="text">
                        <span><font-awesome-icon :icon="['fas', 'eye']" /></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- SEZIONE 2 TESTIMONIALS -->
    <section class="container-fluid sectionBeige"><!-- ToDo: slider -->
        <div class="row">

            <div class="col-6 offset-md-3 text-center">
                <h2 class="quotesMark">“</h2>
                <SliderTestimonialsVue />
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
    <!-- Sezione 5 - TEAM --> <!--ToDo: Hover-->
    <section>
        <div class="container-fluid py-2 bg-light">
            <div class="row">
                <div class="col-3 teamCard">
                    <img class="w-100" src="/img/h1-team-1a-700x700.jpg" alt="">
                </div>
                <div class="col-3 teamCard">
                    <img class="w-100" src="/img/h1-team-2a.jpg" alt="">
                </div>
                <div class="col-3 teamCard">
                    <img class="w-100" src="/img/h1-team-4a.jpg" alt="">
                </div>
                <div class="col-3 teamCard">
                    <img class="w-100" src="/img/h1-team-3a.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
    <!-- Sezione 6 - Clients --><!--ToDo: slider & hover-->
    <section class="clientsSection d-flex align-items-center">
        <div class="container clientsWrapper d-flex">
            <div class="row align-self-center">
                <div class="col-12 px-0">
                    <img class="clientsImg" src="/img/h1-clients-img-1.png" alt="">
                    <img class="clientsImg" src="/img/h1-clients-img-2.png" alt="">
                    <img class="clientsImg" src="/img/h1-clients-img-3.png" alt="">
                    <img class="clientsImg" src="/img/h1-clients-img-4.png" alt="">
                    <img class="clientsImg" src="/img/h1-clients-img-5.png" alt="">
                </div>
            </div>
        </div>
    </section>
    <!-- Sezione 7 - Pizza menu -->
    <section class="pizzaSection">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center w-50 pizzaUpperText">
                    <h5>CHOOSE YOUR FLAVOR</h5>
                    <h2>THE BEST PIZZA MENU IN TOWN</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae repudiandae dolor officia ipsam
                        non soluta repellendus in iste.</p>
                </div>

            </div>
        </div>
        <AppPizzaSlider />
    </section>
    <!-- Sezione 8 -  Deals ToDo: icon & hover-->
    <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col-6 dealText">
                    <div class="dealTextBox">
                        <h5 class="d-block redText fs-6">MADE WITH LOVE</h5>
                        <h3 class="d-block fs-1">DELISH PIZZA DEALS</h3>
                        <div class="d-flex align-items-center myHr py-5">
                            <div class="text-center">
                                <h2 class="dayText redText">02</h2>
                                <h3>NOV</h3>
                            </div>
                            <div class="ps-5">
                                <h4>TRADITIONAL NEAPOLITAN PIES IN KYOTO PIZZA MERCATO</h4>
                                <a class="dealsLink redText" href="#"> 204 E. Pizzetta Tommaso</a>
                            </div>
                        </div>
                        <div class="d-flex align-items-center myHr py-5">
                            <div class="text-center">
                                <h2 class="dayText redText">03</h2>
                                <h3>NOV</h3>
                            </div>
                            <div class="ps-5">
                                <h4>TERARAZZA PATIO DINING SPACE OPENING THIS WEEKEND</h4>
                                <a class="dealsLink redText" href="#"> 204 E. Pizzetta Tommaso</a>
                            </div>
                        </div>
                        <div class="d-flex align-items-center myHr py-5">
                            <div class="text-center">
                                <h2 class="dayText redText">05</h2>
                                <h3>NOV</h3>
                            </div>
                            <div class="ps-5">
                                <h4>SIENNA PRIVATE DINING ROOM WITH STÉPHANE BRUNN</h4>
                                <a class="dealsLink redText" href="#"> 204 E. Pizzetta Tommaso</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-6 ps-0 pe-0">
                    <img class="dealsImg" src="/img/h3-img-5a.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
    <!-- Sezione 9 - Booking a table -->
    <section class="bg-light py-2">
        <div class="bookingSection d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex align-items-center">
                        <select class="form-select peopleBox box formText" aria-label="Default select example">
                            <option selected>1 Person</option>
                            <option class="formText" value="1">2 People</option>
                            <option class="formText" value="2">3 People</option>
                            <option class="formText" value="3">4 People</option>
                            <option class="formText" value="4">5 People</option>
                            <option class="formText" value="5">6 People</option>
                            <option class="formText" value="6">7 People</option>
                            <option class="formText" value="7">8 People</option>
                            <option class="formText" value="8">9 People</option>
                            <option class="formText" value="9">10 People</option>
                            <option class="formText" value="10">11 People</option>
                            <option class="formText" value="11">12 People</option>
                            <option class="formText" value="12">13 People</option>
                            <option class="formText" value="13">14 People</option>
                            <option class="formText" value="14">15 People</option>
                            <option class="formText" value="15">16 People</option>
                            <option class="formText" value="16">17 People</option>
                            <option class="formText" value="17">18 People</option>
                            <option class="formText" value="18">19 People</option>
                            <option class="formText" value="19">20 People</option>
                        </select>
                        <h4 class="bookingText">FOR</h4>
                        <input class="dateBox box formText" type="date">
                        <h4 class="bookingText">AT</h4>
                        <select class="form-select timeBox box formText" aria-label="Default select example">
                            <option class="formText" value="1">6:30 am</option>
                            <option class="formText" value="2">7:00 am</option>
                            <option class="formText" value="3">7:30 am</option>
                            <option class="formText" value="4">8:00 am</option>
                            <option class="formText" selected value="5">8:30 am</option>
                            <option class="formText" value="6">9:00 am</option>
                            <option class="formText" value="7">9:30 am</option>
                            <option class="formText" value="8">10:00 am</option>
                            <option class="formText" value="9">10:30 am</option>
                            <option class="formText" value="10">11:00 am</option>
                            <option class="formText" value="11">11:30 am</option>
                            <option class="formText" value="12">12:00 pm</option>
                            <option class="formText" value="13">12:30 pm</option>
                            <option class="formText" value="14">01:00 pm</option>
                            <option class="formText" value="15">01:30 pm</option>
                            <option class="formText" value="16">02:00 pm</option>
                            <option class="formText" value="17">02:30 pm</option>
                            <option class="formText" value="18">03:00 pm</option>
                            <option class="formText" value="19">03:30 pm</option>
                            <option class="formText" value="20">04:00 pm</option>
                            <option class="formText" value="21">04:30 pm</option>
                            <option class="formText" value="22">05:00 pm</option>
                            <option class="formText" value="23">05:30 pm</option>
                            <option class="formText" value="24">06:00 pm</option>
                            <option class="formText" value="25">06:30 pm</option>
                            <option class="formText" value="26">07:00 pm</option>
                            <option class="formText" value="27">07:30 pm</option>
                            <option class="formText" value="28">08:80 pm</option>
                            <option class="formText" value="29">08:30 pm</option>
                            <option class="formText" value="30">09:00 pm</option>
                            <option class="formText" value="31">09:30 pm</option>
                            <option class="formText" value="32">10:00 pm</option>
                            <option class="formText" value="33">10:30 pm</option>
                            <option class="formText" value="34">11:00 pm</option>
                            <option class="formText" value="35">11:30 pm</option>
                        </select>
                        <button id="bookBtn">BOOK A TABLE</button>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
//Sezione 1 - after jumbotron
.hoverContainer {
    position: relative;
}

.middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;

}

.hoverContainer:hover .quarterImg {
    opacity: 0;

}

.hoverContainer:hover {
    background-image: url("/img/dotted-pattern.png");
    background-size: 70%;
    cursor: pointer;

}


.hoverContainer:hover .middle {
    opacity: 1;

}

.hoverContainer:hover .text {
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-name: zoomIn;

}

@keyframes zoomIn {
    from {
        scale: 0.5;
    }

    to {
        scale: 1;
    }
}

.text {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #d2401e;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
    text-align: center;

    span {
        position: relative;
        top: 12px;
        font-size: 1.3rem;
    }
}

.quarterImg {
    width: 468px;
    height: 320px;
    opacity: 1;
    display: block;
    transition: .5s ease;
    backface-visibility: hidden;
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
    position: relative;
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

//Sezione 5 Team
.teamCard {
    width: calc(100% / 4);
    padding-right: 0;
    padding-left: 0;
}

//Sezione 6 - Clients

.clientsSection {
    height: 315px;
    background-color: #f6f7f2;
}

.clientsWrapper {
    width: 70%;
}

.clientsImg {
    width: calc(100% / 5);
}

//Sezione 7 - pizza menu ToDo: button hover e sticker
.pizzaUpperText {
    margin: 5rem auto;

    h5 {
        color: #d2401e;
        font-size: 0.8rem;
        letter-spacing: 3px;
    }

    h2 {
        color: black;
    }

    p {
        color: #767676;
        font-weight: 300;
        font-size: 1.2rem;
    }
}

.pizzaSection {
    height: 800px;
    background-color: white;
}

//Sezione 8 - Deals
.dealText {
    background-image: url(/img/cielostellato.PNG);
    background-size: cover;
}

.redText {
    color: #d2401e;
}

.dayText {
    font-size: 3.5rem;
}

.myHr {
    border-bottom: 2px dotted #b68a2c;

}

.dealsLink {
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 300;
}

.dealTextBox {
    width: 50%;
    margin: 0 auto;
    margin-top: 6rem;
}

.dealsImg {
    width: 100%;
}

//Sezione 9 Book a table
.bookingSection {
    height: 296px;
    background-image: url(/img/h3-background-img-3.jpg);
}

.box {
    width: 20%;
    padding: 1rem;
}

.peopleBox {

    background-image: url(/svg/user-group-solid.svg);
}

.timeBox {
    background-image: url(/svg/clock-regular.svg);
    background-size: 7%;
}

.formText {
    color: #a6a6a6;
    font-weight: 300;
    font-size: 1.2rem;
}

.bookingText {
    padding: 0 2rem;
}

#bookBtn {
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
    width: 259px;
    height: 62.8px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-left: 2rem;

    &:hover {
        background-position: 0 100%;
    }
}



// ...qui eventuale SCSS di AppComponent
</style>