import { Button, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuantity,
  removefromcart,
  clearcart,
} from "../RTK/slices/cart-slice";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const totalprice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  console.log(cart);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div>
      <h1 className="py-5">welcome to cart</h1>
      <Button variant="danger" onClick={() => dispatch(clearcart())}>
        Clear Cart
      </Button>
      <h2>Total Price: {totalprice.toFixed(2)} $</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <Image
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{product.price}</td>
              <td>
                {product.quantity}
                <br />
                <Button
                  onClick={() =>
                    handleQuantityChange(product.id, product.quantity + 1)
                  }
                  variant="secondary"
                  size="lg"
                >
                  +
                </Button>{" "}
                <Button
                  onClick={() =>
                    handleQuantityChange(product.id, product.quantity - 1)
                  }
                  variant="secondary"
                  size="lg"
                >
                  -
                </Button>
              </td>

              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(removefromcart(product))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
