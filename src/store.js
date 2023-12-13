import { reactive } from 'vue'

export const store = reactive({
    pizzas: [
        {
            name: "VALDOSTANA",
            price: "$55.00",
            image: "/img/h3-product-img-1a.png"
        },
        {
            name: "PIZZA TARTUFATA",
            price: "$45.00",
            image: "/img/h3-product-img-2a.png"
        },
        {
            name: "FRANCESCANA",
            price: "$25.00",
            image: "/img/h3-product-img-3a.png"
        },
        {
            name: "CAMPAGNOLA",
            price: "$50.00 - $95.00",
            image: "/img/h3-product-img-4a.png"
        },
        {
            name: "BISMARCK",
            exprice: "$35.00",
            price: "$30.00",
            image: "/img/h3-product-img-5a.png"
        },
        {
            name: "FIORI DI ZUCCA",
            price: "$7.00 - $50.00",
            image: "/img/h3-product-img-6a.png"
        },
    ],
    teamMembers: [
        {
            name: "PETER ANDERSON",
            role: "Head Chef",
            image: "/img/h1-team-1a-700x700.jpg"
        },
        {
            name: "SHARON HAYES",
            role: "Execute Chef",
            image: "/img/h1-team-2a.jpg"
        },
        {
            name: "FRANK BALEY",
            role: "Kitchen Porter",
            image: "/img/h1-team-4a.jpg"
        },
        {
            name: "CAROL SIMPSON",
            role: "Sous Chef",
            image: "/img/h1-team-3a.jpg"
        },
    ]
})