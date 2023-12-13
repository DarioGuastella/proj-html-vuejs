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
            navigation: {                       //navigation(arrows)
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

        };
    },
    methods: {

    },
    mounted() {
    }
};
</script>

<template>
    <swiper :direction="'vertical'" :autoplay="{ delay: 5000, disableOnInteraction: false }" :navigation="navigation"
        :loop="true" :modules="modules" class="mySwiper">
        <swiper-slide>
            <img class="position-absolute imgBc" src="/img/h3-rev-img-1.png" alt="">
            <img class="z-3 deelayImg" src="/img/h3-rev-img-2.png" alt="">
        </swiper-slide>
        <swiper-slide>
            <img class="position-absolute imgBc" src="/img/h3-rev-img-3.png" alt="">
            <img class="z-3 deelayImg" src="/img/h3-rev-img-4.png" alt="">
        </swiper-slide>
        <swiper-slide>
            <img class="position-absolute imgBc" src="/img/h3-rev-img-5.png" alt="">
            <img class="z-3 deelayImg" src="/img/h3-rev-img-6.png" alt="">
        </swiper-slide>
        <div class="swiper-button-prev">
            <p>PREV</p>
        </div>
        <div class="swiper-button-next">
            <p>NEXT</p>
        </div>
    </swiper>
</template>
<style scoped lang="scss">
.swiper {
    width: 100%;
    height: 600px;
    background-image: url(/img/cielostellato.PNG);
    background-position: bottom;
    background-size: cover;
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


.deelayImg {
    animation-delay: 0.5s;
    animation-name: fade;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    position: relative;
    opacity: 0;
}

@keyframes fade {
    from {
        opacity: 0;
        top: -8rem;
    }

    to {
        opacity: 1;
        top: 0
    }
}

.imgBc {
    animation-name: zoom-in;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;

}

@keyframes zoom-in {
    from {
        scale: 0.9;
        opacity: 0;
    }

    to {
        scale: 1;
        opacity: 1;
    }
}

// .swiper-slide img {
//     display: block;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// }
.swiper-button-next::after,
.swiper-button-prev::after {
    content: "";
}

.swiper-button-next,
.swiper-button-prev {
    background-color: white;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    font-weight: 300;
    font-size: 1.2rem;
}

.swiper-button-next {
    right: -45px;

    p {
        color: #d2401e;
        transform: rotate(-90deg);
        position: relative;
        top: 8px;
        bottom: 0;
        right: 20px;
    }
}

.swiper-button-prev {
    left: -45px;

    p {
        color: #d2401e;
        transform: rotate(90deg);
        position: relative;
        top: 8px;
        bottom: 0;
        left: 20px;
    }
}
</style>

  