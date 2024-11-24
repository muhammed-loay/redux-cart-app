import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchproductds } from "../RTK/slices/products-slice";
import { addtocart } from "../RTK/slices/cart-slice";

function Products() {
  const products = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchproductds());
  }, []);
  return (
    <Container className="py-5">
      <Row className="py-5">
        {products.map((product) => (
          <Col key={product.id} md={4} className="d-flex align-items-stretch">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "100%", height: "250px" }}
                variant="top"
                src={product.image}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.discription}</Card.Text>
                <Card.Text>{product.price}$</Card.Text>

                <Button
                  variant="primary"
                  onClick={() => dispatch(addtocart(product))}
                >
                  Add to card
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Products;
