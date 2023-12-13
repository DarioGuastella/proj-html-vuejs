import { reactive } from 'vue'

export const store = reactive({
    pizzas: [
        {
            name: "VALDOSTANA",
            price: "$55.00",
            image: "/img/h3-product-img-6a-100x100.png"
        },
        {
            name: "PIZZA TARTUFATA",
            price: "$45.00",
            image: "/img/h3-product-img-4a-150x150.png"
        },
        {
            name: "FRANCESCANA",
            price: "$25.00",
            image: "/img/h3-product-img-5a-150x150.png"
        },
        {
            name: "CAMPAGNOLA",
            price: "$50.00 - $95.00",
            image: "/img/h3-product-img-3a-150x150.png"
        },
        {
            name: "BISMARCK",
            exprice: "$35.00",
            price: "$30.00",
            image: "/img/h3-product-img-4a-150x150.png"
        },
        {
            name: "FIORI DI ZUCCA",
            price: "$7.00 - $50.00",
            image: "/img/h3-product-img-4a-150x150.png"
        },


    ]
})