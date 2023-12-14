<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

// STICKY HEADER
document.addEventListener("scroll", function () {
    const anchoredCtaWeb = document.getElementById("anchoredCtaWeb");
    if (window.pageYOffset > 1600) {
        anchoredCtaWeb.classList.add("show");
    }
    if (window.pageYOffset < 1600) {
        anchoredCtaWeb.classList.remove("show");
    }
});

export default {
    name: "AppStickyHeader",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppHeader does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <div id="anchoredCtaWeb" class="container-fluid headerWrapper sticky-top w-100">
        <div class="row d-flex align-items-center h-100">
            <div class="col-8 text-center h-100 offset-md-2">
                <a href="#"><img class="mustache" src="/svg/svg-0.svg" alt="">HOME</a>
                <a href="#">PAGES</a>
                <a href="#">MENU</a>
                <img class="headerLogo" src="/img/logo.png" alt="">
                <a href="#">EVENT</a>
                <a href="#">BLOG</a>
                <a href="#">LANDING</a>
            </div>
        </div>
    </div>

    <!-- HEADER 2 -->
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;
//STICKY HEADER
#anchoredCtaWeb {
    position: sticky;
    transform: translateY(-80px);
    opacity: 0;
    visibility: hidden;
    top: 80;
    height: 0;
}


#anchoredCtaWeb.show {
    top: 0;
    height: 80px;
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
    transition: 0.5s;

}

//FINE STICKY
a {
    text-decoration: none;
    color: black;
    padding: 0 1.5rem;
    font-size: 0.8rem;
    font-weight: 600;
}


.mustache {
    height: 0.6rem;
    padding-right: 0.3rem;
    margin-bottom: 0.2rem;

}

.headerLogo {
    height: 80px;
    padding: 0.3rem;
}

.headerWrapper {
    background-color: white;
    height: 80px;
}



// ...qui eventuale SCSS di AppComponent
</style>