<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Autoplay, Navigation]
        };
    },
    methods: {

    },
    mounted() {
    }
};
</script>

<template>
    <swiper :slidesPerView="5" :autoplay="{ delay: 2000, disableOnInteraction: false }" :loop="true" :modules="modules"
        class="mySwiper">
        <swiper-slide>
            <div class="pizzaBox">
                <img src="../../public/img/" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="pizzaBox">
                <img src="/img/h3-product-img-2a.png" alt="">
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="pizzaBox">
                <img src="/img/h3-product-img-3a.png" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="pizzaBox">
                <img src="/img/h3-product-img-4a.png" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="pizzaBox">
                <img src="/img/h3-product-img-5a.png" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="pizzaBox">
                <img src="/img/h3-product-img-6a.png" alt="">
            </div>
        </swiper-slide>
    </swiper>
</template>
<style scoped lang="scss">
.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.pizzaBox {
    height: 200px;
    width: 100%;
}
</style>

  