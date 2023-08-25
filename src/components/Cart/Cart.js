import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import Basura from "../CartItem/Assets/trash.svg";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <p className="has-text-dark">NO HAY PRODUCTOS AGREGADOS AL CARRITO</p>
                <Link to="/" className="option button is-success is-rounded has-text-white">VER TODOS LOS PRODUCTOS</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p} />) }
            <p className="title is-3 has-text-dark m-5">TOTAL : ${total}</p>
            <div className="botones">
                <button onClick={() => clearCart()} className="button is-success is-rounded has-text-white m-2">
                    <img src={Basura} alt="eliminar-carrito" className="mr-2"/>ELIMINAR CARRITO</button>
                <Link to="/checkout" className="option button is-success is-rounded has-text-white m-2">CHECKOUT</Link>
                <Link to="/" className="option button is-success is-rounded has-text-white m-2">SEGUIR COMPRANDO</Link>
            </div>
        </div>
    )
}

export default Cart;