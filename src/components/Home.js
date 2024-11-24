import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="text-center py-5">
      <h1>Welcome to the Cart App</h1>
      <p>
        This is a simple e-commerce cart application built with React and Redux.
      </p>
      <div className="d-flex justify-content-center gap-3">
        <Link to="/products">
          <Button variant="primary" size="lg">
            View Products
          </Button>
        </Link>
        <Link to="/cart">
          <Button variant="success" size="lg">
            Go to Cart
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default Home;
