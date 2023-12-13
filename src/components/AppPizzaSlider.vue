<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { store } from '../store';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default {
    name: "AppPizzaSlider",
    props: {
        data: Object
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Autoplay, Navigation],
            store
        };
    },
    methods: {

    },
    mounted() {
    }
};
</script>

<template>
    <swiper :slidesPerView="5" :spaceBetween="2" :autoplay="{ delay: 2000, disableOnInteraction: false }" :loop="true"
        :modules="modules" class="mySwiper">
        <swiper-slide v-for="pizze, i in this.store.pizzas" class="text-center">
            <div class="pizzaBox">
                <img :src="store.pizzas[i].image" alt="">
            </div>
            <h3 class="mt-4 pizzaText">{{ store.pizzas[i].name }}</h3>
            <h3 class="pizzaPrice"><span>{{ store.pizzas[i].exprice }}</span>{{ store.pizzas[i].price }}</h3>
        </swiper-slide>
        <!-- <swiper-slide class="text-center">
            <div class="pizzaBox">
                <img src="/img/h3-product-img-2a.png" alt="">

            </div>
            <h3 class="mt-4 pizzaText">FIORI DI ZUCCA</h3>
            <h3 class="pizzaPrice">$7.00 - $50.00</h3>
        </swiper-slide>

        <swiper-slide class="text-center">
            <div class="pizzaBox">
                <img src="/img/h3-product-img-3a.png" alt="">
            </div>
            <h3 class="mt-4 pizzaText">CAMPAGNOLA</h3>
            <h3 class="pizzaPrice">$50.00 - $95.00</h3>
        </swiper-slide>
        <swiper-slide class="text-center">
            <div class="pizzaBox">
                <img src="/img/h3-product-img-4a.png" alt="">
            </div>
            <h3 class="mt-4 pizzaText">PIZZA TARTUFATA</h3>
            <h3 class="pizzaPrice">$45.00</h3>
        </swiper-slide>
        <swiper-slide class="text-center">
            <div class="pizzaBox">
                <img src="/img/h3-product-img-5a.png" alt="">
            </div>
            <h3 class="mt-4 pizzaText">FRANCESCANA</h3>
            <h3 class="pizzaPrice">$25.00</h3>
        </swiper-slide>
        <swiper-slide class="text-center">
            <div class="pizzaBox">
                <img src="/img/h3-product-img-6a.png" alt="">
            </div>
            <h3 class="mt-4 pizzaText">VALDOSTANA</h3>
            <h3 class="pizzaPrice">$55.00</h3>
        </swiper-slide> -->

    </swiper>
</template>
<style scoped lang="scss">
.swiper-slide {
    width: 200px;
    height: auto;

    /* Center slide text vertically */
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    h3 {
        font-size: 1.2rem;

        span {
            text-decoration: line-through;
            color: #d3cfaf;
            padding-right: 0.5rem;
        }
    }

}

.pizzaPrice {
    color: #d2401e;
}

.pizzaBox {
    height: 60%;
    width: 100%;
}

.pizzaText {
    color: #b68a2c;

}
</style>

  