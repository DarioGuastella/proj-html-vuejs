<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Autoplay],
            swiper: null
        };
    },
    methods: {
        onSwiper(instance) {
            console.log("swiper avviato");
            this.swiper = instance
        },
        swiperNext() {
            this.swiper.slideNext()
        },
    },
    mounted() {
        window.x = this.swiper
    }
};
</script>



<template>
    <swiper @swiper="onSwiper" :direction="'vertical'" :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :navigation="false" :loop="true" :modules="modules" class="mySwiper">
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

    </swiper>
    <button v-if="swiper" @click="swiperNext()">Slide to the next slide</button>
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
</style>
<style>
/* .jumboR,
.jumboL {
    background-color: red;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
}

.jumboR {
    right: -40px;


}

.jumboL {
    left: -40px
} */

.jumboR::after,
.jumboL::after {
    content: "";
}
</style>
  