import React from "react";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import "../../../styles/shopping-cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartUISliceActions } from "../../../store/shopping-cart/cartUISlice";
const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const toggleCart = () => {
    dispatch(cartUISliceActions.toggle());
  };
  return (
    <div className="cart_container">
      <ListGroup className="cart">
        <div className="cart_close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>
        <div className="cart_item_list">
          {cartProducts.length === 0 ? (
            <h4 className="text-center mt-5">No item added to the cart</h4>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>
        <div className="cart_bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal amount: <span>${totalAmount.toFixed(2)}</span>
          </h6>
          <button>Checkout</button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
