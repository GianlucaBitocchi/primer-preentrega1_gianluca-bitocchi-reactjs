import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <p>NO HAY PRODUCTOS AGREGADOS AL CARRITO</p>
                <Link to="/" className="option">VER TODOS LOS PRODUCTOS</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <p className="title is-3 has-text-dark m-5">TOTAL : ${total}</p>
            <div className="botones">
                <button className="button is-success is-rounded has-text-white mt-5" onClick={() => clearCart()}>ELIMINAR CARRITO</button>
                <Link to="/checkout" className="option button is-success is-rounded has-text-white m-5">CHECKOUT</Link>
            </div>
        </div>
    )
}

export default Cart;