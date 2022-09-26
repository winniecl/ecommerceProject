import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/cart/cart.selector";

const Checkout = () => {
  const { cartItems, cartTotal } = useSelector(cartSelector);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {Object.entries(cartItems).map(([key, value]) => (
        <CheckoutItem key={key} cartItem={value} />
      ))}
      <div className="total">TOTAL: ${cartTotal}</div>
    </div>
  );
};
export default Checkout;
