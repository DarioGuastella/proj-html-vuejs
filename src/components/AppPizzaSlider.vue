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
    <swiper :slidesPerView="5" :spaceBetween="2" :loop="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="pizze, i in this.store.pizzas" class="text-center">
            <div class="pizzaCard">
                <div class="pizzaBox">
                    <img :src="store.pizzas[i].image" alt="">
                </div>
                <h3 class="mt-4 pizzaText">{{ store.pizzas[i].name }}</h3>
                <h3 class="pizzaPrice"><span>{{ store.pizzas[i].exprice }}</span>{{ store.pizzas[i].price }}</h3>
                <div class="d-flex">
                    <button class="viewBtn button me-2">ADD TO CART</button>
                    <button class="quickBtn button">QUICK VIEW</button>
                </div>
            </div>

        </swiper-slide>
        <!-- :autoplay="{ delay: 2000, disableOnInteraction: false }" -->
    </swiper>
</template>
<style scoped lang="scss">
.swiper-slide {
    width: 200px;
    height: 450px;

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

    // .button {
    //     display: none;
    // }



}

.swiper-slide:hover .button {
    display: flex;
}

.pizzaPrice {
    color: #d2401e;
}

.pizzaBox {
    height: 200px;
}

.pizzaCard {
    text-align: center;
    /* align-content: center; */
    align-items: center;
    display: flex;
    flex-direction: column;
}

.pizzaText {
    color: #b68a2c;

}

.button {
    opacity: 0;
}

.pizzaCard:hover .viewBtn {
    animation-delay: 0.1s;
    animation-name: fade;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    position: relative;
    opacity: 0;
}

.pizzaCard:hover .quickBtn {
    animation-delay: 0.2s;
    animation-name: fade;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    position: relative;
    opacity: 0;
}

@keyframes fade {
    from {
        opacity: 0;
        top: 1rem;
    }

    to {
        opacity: 1;
        top: 0
    }
}

.quickBtn {
    /*Reset*/
    display: inline-block;
    outline: none;
    background-color: white;

    /*Some fancy stuff*/
    line-height: 200%;
    border: 0;
    /*Magic*/
    background-image: linear-gradient(#f6f7f2, #f6f7f2 50%, #e4e4d4 50%, #e4e4d4);
    background-size: 100% 200%;
    transition: background-position .3s;
    color: black;
    padding: 0.5rem 1.6rem;
    font-size: 0.8rem;
    font-weight: 500;

    &:hover {
        background-position: 0 100%;
    }
}

.viewBtn {
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
</style>

  