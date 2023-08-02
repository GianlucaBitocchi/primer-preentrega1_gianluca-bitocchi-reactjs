import CascoLsNegro from "./img/CascoLsNegro.jpg";
import CascoLsVerde from "./img/CascoLsVerde.jpg";
import CascoLsRojo from "./img/CascoLsRojo.jpg";

const products = [

    {
        id: "1",
        name: "CASCO LS2 NEGRO MATE",
        price: "80.000",
        category: "CASCO",
        img: { CascoLsNegro },
        stock: 10,
        description: "INTEGRAL"
    },
    {
        id: "2",
        name: "CASCO LS2 NEGRO CON VERDE",
        price: "95.000",
        category: "CASCO",
        img: { CascoLsVerde },
        stock: 10,
        description: "INTEGRAL"
    },
    {
        id: "3",
        name: "CASCO LS2 NEGRO CON ROJO",
        price: "65.000",
        category: "CASCO",
        img: { CascoLsRojo },
        stock: 10,
        description: "INTEGRAL"
    }
]

export const getProducts = () => {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (productId) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}