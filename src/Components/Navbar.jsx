import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ColorSchemesExample() {
  const cartData = useSelector((state) => state.cart);

  const navigate = useNavigate();

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="px-5 d-flex align-items-center justify-content-between"
      >
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          Navbar
        </Navbar.Brand>
        <div
          className="ml-auto d-flex gap-2"
          onClick={() => {
            navigate("/cartitem");
          }}
        >
          <h5 className="text-white m-0">Cart Item:</h5>
          <h5 className="text-white m-0">{cartData.length}</h5>
        </div>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
