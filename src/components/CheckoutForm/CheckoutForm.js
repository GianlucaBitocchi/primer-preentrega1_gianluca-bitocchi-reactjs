import "./CheckoutForm.css";
import { useState, useContext } from "react";
import Check from "./Assets/cart-check.svg"
import Error from "./Assets/bag-x.svg";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import CheckoutDetail from "../CheckoutDetail/CheckoutDetail";

const CheckoutForm = ({ onConfirm, selectedProductos }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")

    const { cart, addItem, removeItem, clearCart, totalQuantity, totalPrice } = useContext(CartContext)

    const handleConfirm = (event) => {
        event.preventDefault()

if (email === confirmEmail) {

        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    } else {
        alert("EMAIL INCORRECTO");
    }
}

    return (

        <div className="formulario">
            <form onSubmit={handleConfirm} className="datos">
                <p className="title is-5">
                    <label>
                        NOMBRE Y APELLIDO
                        <input type="text" value={name} required onChange={({ target }) => setName(target.value)} />
                    </label>
                </p>
                <p className="title is-5">
                    <label>
                        TELEFONO
                        <input type="text" value={phone} required onChange={({ target }) => setPhone(target.value)} />
                    </label>
                </p>
                <p className="title is-5">
                    <label>
                        EMAIL
                        <input type="email" value={email} required onChange={({ target }) => setEmail(target.value)} />
                    </label>
                </p>
                <p className="title is-5">
                    <label>
                        CONFIRMAR EMAIL
                        <input type="email" value={confirmEmail} required onChange={({ target }) => setConfirmEmail(target.value)} />
                    </label>
                </p>
                <div className="boton">
                    <button type="submit" className="button is-success is-rounded has-text-white mr-4">
                        <img src={Check} alt="ok-compra" className="mr-2" />REALIZAR PEDIDO</button>
                    <Link to="/" onClick={() => clearCart()} className="option button is-success is-rounded has-text-white">
                        <img src={Error} alt="cancelar-compra" className="mr-2 error " />CANCELAR PEDIDO</Link>
                </div>
            </form>
            <div>
                <CheckoutDetail cart={cart} />
            </div>
        </div>

    )
}


export default CheckoutForm