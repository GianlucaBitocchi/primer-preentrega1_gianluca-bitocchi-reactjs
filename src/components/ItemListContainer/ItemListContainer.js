import { useState, useEffect } from "react";
import { getProductsByCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

    const ItemListContainer = ({ greeting }) => {
        const [products, setProducts] = useState([])

        const {categoryId} = useParams()

        useEffect(() => {
const asyncFunc = categoryId ? getProductsByCategory : getProducts

            asyncFunc(categoryId)
                .then(response => {
                    setProducts(response)
                })
                .catch(error => {
                    console.error(error)
                })
        }, [categoryId])

        return (

            <div>
                <p className="title is-3 has-background-black has-text-success has-text-centered p-3 pb-5">{greeting}</p>
                <ItemList products={products} />
            </div>

        )
    }


export default ItemListContainer;