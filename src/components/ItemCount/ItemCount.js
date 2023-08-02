import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (

        <div className="container-fluid  is-justify-content-center">
            <div className="has-background-black">
                <div className="columns">
                    <div className="column is-1">
                        <button className="button is-success is-outlined is-rounded" onClick={decrement}> - </button>
                    </div>
                    <div className="column is-1">
                        <p className="title is-3 has-text-success">{quantity}</p>
                    </div>
                    <div className="column is-1">
                        <button className="button is-success is-outlined is-rounded" onClick={increment}> + </button>
                    </div>
                </div>
                <div className="column is-3">
                    <button className="button is-success is-outlined is-rounded" onClick={() => onAdd(quantity)} disabled={!stock}>AGREGAR AL CARRITO</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;