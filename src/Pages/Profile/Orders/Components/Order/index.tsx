import "./style.css";

const Order = () => {
  return (
    <div className="order">
      <div className="order-info">
        <h4>Order No:</h4>
        <p>#12345</p>
      </div>
      <div className="order-info">
        <h4>Items:</h4>
        <p>Item1, Item2, ... </p>
      </div>
      <div className="order-info">
        <h4>Total:</h4>
        <p>599.99 L.E.</p>
      </div>
      <div className="order-info">
        <h4>Status:</h4>
        <p>On Delivery</p>
      </div>
      <button>Cancel Order</button>
    </div>
  );
};

export default Order;
