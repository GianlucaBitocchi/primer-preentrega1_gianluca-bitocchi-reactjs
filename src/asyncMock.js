import cascoLsNegro from "./img/CascoLsNegro.jpg";
import cascoLsVerde from "./img/CascoLsVerde.jpg";
import cascoLsRojo from "./img/CascoLsRojo.jpg";
import cubiertaTitan from "./img/cubierTitan.jpg";
import cubiertaTwister from "./img/CubiertaTwister.jpg";
import cubiertaTortnado from "./img/CubiertaTornado.jpg";
import camperaLs from "./img/CamperaLs.jpg";
import pantalonLs from "./img/PantalonLs.jpg";
import guantesLs from "./img/GuantesLs.jpg";
import carburadorTornado from "./img/carbuTornado.jpg";
import transmicionTornado from "./img/TransmicionTornado.jpg";
import frenosTornado from "./img/FrenosTornado.jpg";

const products = [

    {
        id: "1",
        name: "CASCO LS2 436 PIONEER EVO",
        price: "128.000",
        category: "cascos",
        img:  cascoLsNegro ,
        stock: 10,
        color: "NEGRO MATE",
        description: "INTEGRAL"
    },
    {
        id: "2",
        name: "CASCO LS2 353 RAPID CROMO",
        price: "74.700",
        category: "cascos",
        img:  cascoLsVerde ,
        stock: 10,
        color: "NEGRO MATE Y AMARILLO FLUO",
        description: "INTEGRAL"
    },
    {
        id: "3",
        name: "CASCO LS2 352 ROOKIE INFINITE",
        price: "120.000",
        category: "cascos",
        img: cascoLsRojo ,
        stock: 10,
        color: "ROJO Y AZUL",
        description: "INTEGRAL"
    },
    {
        id:"4",
        name: "CUBIERTAS TITAN 150cc.",
        price: "64.900",
        category:"cubiertas",
        img: cubiertaTitan,
        stock:10,
        description:"CALLE"
    },
    {
        id:"5",
        name: "CUBIERTAS TWISTER 250cc.",
        price: "176.600",
        category:"cubiertas",
        img: cubiertaTwister,
        stock:10,
        description:"CALLE"
    },
    {
        id:"6",
        name: "CUBIERTAS TORNADO 250cc.",
        price: "160.000",
        category:"cubiertas",
        img: cubiertaTortnado,
        stock:10,
        description:"ON OFF"
    },
    {
        id:"7",
        name: "CAMPERA LS2 PROTECCIONES",
        price: "202.600",
        category:"indumentaria",
        img: camperaLs,
        color:"GRIS",
        stock:10,
        description:"IMPERMEABLE"
    },
    {
        id:"8",
        name: "PANTALON LS2 PROTECCIONES",
        price: "120.700",
        category:"indumentaria",
        img: pantalonLs,
        color: "NEGRO",
        stock:10,
        description:"IMPERMEABLE"
    },
    {
        id:"9",
        name: "GUANTES LS2 PROTECCIONES",
        price: "55.000",
        category:"indumentaria",
        img: guantesLs,
        color:"NEGRO",
        stock:10,
        description:"IMPERMEABLE"
    }, 
    {
        id:"10",
        name: "CARBURADOR TORNADO",
        price: "30.000",
        category:"repuestosengeneral",
        img: carburadorTornado,
        stock:10,
        description:"ORIGINAL"
    },
    {
        id:"11",
        name: "KIT DE FRENOS TORNADO",
        price: "11.800",
        category:"repuestosengeneral",
        img: frenosTornado,
        stock:10,
        description:"FRASLE BRASIL"
    },
    {
        id:"12",
        name: "TRANSMICION TORNADO",
        price: "66.400",
        category:"repuestosengeneral",
        img: transmicionTornado,
        stock:10,
        description:"RIFFEL BRASIL"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))
        }, 500)
    })
}