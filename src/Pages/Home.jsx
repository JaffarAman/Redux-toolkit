import ColorSchemesExample from "../Components/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardCmp from "../Components/CardCmp";
import { fetchProduct } from "../Store/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  if (status === "loading") {
    return <h1>LOADING...</h1>;
  }
  return (
    <>
      <ColorSchemesExample />
      <h1>HELLO SHOP</h1>
      <Container className="mt-5">
        <Row>
          {data?.map((product) => {
            return (
              <Col lg={3} key={product.id}>
                <CardCmp product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
