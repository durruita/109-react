import "./cart.css";
import { useContext } from "react";
import store from "../context/storeContext";
import ProductInCart from "./productInCart";

const Cart = () => {

    let {cart, addProdToCart} = useContext(store);

    return (
        <div className="cart-page">
            <h3>Let's finish the order!!!</h3>
            <h5>You have {cart.length} items in your cart.</h5>

            <div className="products">
                {cart.map ((prod) => (
                    <ProductInCart key={prod._id} data={prod}></ProductInCart>
                ))}
            </div>
        </div>
    );
};

export default Cart;