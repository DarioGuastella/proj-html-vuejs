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
    setup() {
        return {
            modules: [Autoplay, Navigation],
        };
    },
};
</script>

<template>
    <swiper :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
    }" :navigation="true" :loop="true" :modules="modules" class="mySwiper">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>

    </swiper>
</template>
<style scoped lang="scss">
.swiper {
    width: 100%;
    height: 500px;
    background-image: url(/img/cielostellato.PNG);
    background-position: bottom;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;

    color: black;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
  