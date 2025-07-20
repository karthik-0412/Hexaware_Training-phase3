import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../redux/cartslice";

const Billing = () => {
    const { cartItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    let totalAmount = 0;

    cartItems.forEach(item => {
        totalAmount += item.price * item.quantity;
    });

    return (
        <div>
            <h2>Billing Summary</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <div>
                    <table border="1" cellPadding="5">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>₹{item.price}</td>
                                    <td>₹{item.price * item.quantity}</td>
                                    <td>
                                        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>Total Amount: ₹{totalAmount}</h3>
                    <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
                </div>
            )}
        </div>
    );
};

export default Billing;
