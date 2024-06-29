import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Address" />
      
      <div className="multi-field">
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Enter PIN" />
      </div>
      <input type="text" placeholder="phone" />
      </div>
      <div className="place-order-right"></div>
      <div className="cart-total">
        <h2>Cart Totals</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>Rs {getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>Rs {getTotalCartAmount()===0?0:30}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>Rs {getTotalCartAmount()===0?0:getTotalCartAmount() + 30}</b>
          </div>
        </div>
        <button>PROCEED TO PAYMENT</button>
      </div>
    </form>
  );
}

export default PlaceOrder;
