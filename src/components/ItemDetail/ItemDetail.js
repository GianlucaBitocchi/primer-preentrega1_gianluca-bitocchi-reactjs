import "./ItemDetail.css";
import "animate.css";
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ id, img, name, price, color, stock }) => {
    const [quantityAdded, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const item = {
            id, name, price, img
        }
        addItem(item, quantity)
    }

    return (

        <article id="detalles" className="animate__animated animate__zoomInDown">
            <header>
                <p className="title is-6 has-text-dark m-2">
                    {name}
                </p>
            </header>
            <figure>
                <img src={img} alt={name} width={180} height={180} id="imagenes" />
            </figure>
            <section className="title is-6 has-text-dark">
                <p className="m-2">PRECIO : ${price}</p>
                <p className="m-2">COLOR : {color}</p>
                <p className="m-2">STOCK DISPONIBLE : {stock}.u </p>
            </section>          
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart" className="option button is-success is-rounded has-text-white" >IR AL CARRITO</Link>
                    ) : (
                    < ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            
        </article>

    )
}

export default ItemDetail;