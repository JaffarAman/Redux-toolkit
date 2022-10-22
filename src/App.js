import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartItem from "./Pages/CartItem";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="cartitem" element={<CartItem />} />
      </Routes>
    </>
  );
}

export default App;
