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
            modules: [Autoplay, Navigation],
        };
    },
};
</script>

<template>
    <swiper :autoplay="{ delay: 2500, disableOnInteraction: false }" :navigation="true" :loop="true" :modules="modules"
        class="mySwiper">
        <swiper-slide>
            <img class="position-absolute" src="/img/h3-rev-img-1.png" alt="">
            <img class="z-3" src="/img/h3-rev-img-2.png" alt="">
        </swiper-slide>
        <swiper-slide>
            <img class="position-absolute" src="/img/h3-rev-img-3.png" alt="">
            <img class="z-3" src="/img/h3-rev-img-4.png" alt="">
        </swiper-slide>
        <swiper-slide>
            <img class="position-absolute" src="/img/h3-rev-img-5.png" alt="">
            <img class="z-3" src="/img/h3-rev-img-6.png" alt="">
        </swiper-slide>

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

    color: white;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}


// .swiper-slide img {
//     display: block;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// }
</style>
  