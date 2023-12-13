<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Autoplay, Navigation, Pagination],
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
    <swiper :pagination="true" :autoplay="{ delay: 5000, disableOnInteraction: false }" :navigation="navigation"
        :loop="true" :modules="modules">
        <swiper-slide>
            <h2>"FORGET THE TRENDY PIZZA SHOPS, THIS HUDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES"</h2>
            <h5>WASHINGTON POST 2018</h5>
        </swiper-slide>
        <swiper-slide>
            <h2>"FORGET THE TRENDY PIZZA SHOPS, THIS HUDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES"</h2>
            <h5>WASHINGTON POST 2018</h5>
        </swiper-slide>
        <swiper-slide>
            <h2>"BASSA E SCROCCHIARELLA"</h2>
            <h5>FRANCHINO ER CRIMINALE</h5>
        </swiper-slide>

    </swiper>
    <div class="swiper-button-prev">
        <p>PREV</p>
    </div>
    <div class="swiper-button-next">
        <p>NEXT</p>
    </div>
</template>
<style scoped lang="scss">
.swiper {
    width: 100%;
    height: 140px;
    background-position: bottom;
    background-size: cover;
    bottom: 150px;


}


.swiper-slide {
    text-align: center;
    font-size: 18px;

    color: black;
    /* Center slide text vertically */
    // display: flex;
    // justify-content: center;
    align-items: center;

    h5 {
        color: #d2401e;
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
    // border-radius: 50%;
    // height: 5rem;
    // width: 5rem;
    font-weight: 300;
    font-size: 1.2rem;
    width: 5rem;
    height: 2.5rem;
    border-radius: 100px 100px 0 0;

}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    transition: 0.4s;
    background-color: #b39961;
}

.swiper-button-next {
    transform: rotate(-90deg);
    right: -20px;

    p {
        color: #d2401e;
        position: relative;
        top: 10px;
        bottom: 0;
    }
}

.swiper-button-prev {
    transform: rotate(90deg);
    left: -20px;

    p {
        color: #d2401e;
        position: relative;
        top: 10px;
        bottom: 0;
    }
}
</style>

  