import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItemsFromCart } from "../../actions/cartAction";
import "./CartItemCard.css";

const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <p onClick={() => dispatch(removeItemsFromCart(item.product))}>
          Remove
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
