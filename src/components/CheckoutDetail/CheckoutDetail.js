import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import CartContext from "../../context/CartContext";

const CheckoutDetail = () => {
    const { cart, totalPrice } = useContext(CartContext);

    return (
        <div>
            <p className="title is-4 has-text-centered mt-5">DETALLE DE LA COMPRA</p>
            {cart.map((product) => (
                <CartItem
                    img={product.img}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                />
            ))}
            <p className="title is-3 has-text-dark m-5" id="total">TOTAL :  ${parseFloat(totalPrice()).toFixed()}</p>
        </div>
    );
};

export default CheckoutDetail;