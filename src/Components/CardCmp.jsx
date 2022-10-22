import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add, remove } from "../Store/CartSlice";

function CardCmp({ product, removeBtn }) {
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(add(product));
  };
  const removeCart = () => {
    dispatch(remove(product));
  };

  return (
    <Card style={{ width: "100%" }}>
      <Card.Img
        variant="top"
        src={product.image}
        className="w-100"
        height={200}
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        {removeBtn ? (
          <Button variant="primary" onClick={removeCart}>
            Remove to Cart
          </Button>
        ) : (
          <Button variant="primary" onClick={addCart}>
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardCmp;
