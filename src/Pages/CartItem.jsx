import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardCmp from "../Components/CardCmp";
import ColorSchemesExample from "../Components/Navbar";

const CartItem = () => {
  const data = useSelector((state) => state.cart);
  return (
    <div>
      <ColorSchemesExample />
      <h1>ADD CART ITME:</h1>
      <Container className="mt-5">
        <Row>
          {data?.map((product) => {
            return (
              <Col lg={3} key={product.id}>
                <CardCmp product={product} removeBtn={true} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CartItem;
