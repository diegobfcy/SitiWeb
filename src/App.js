import Template from "./template/Template";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import ProductList from "./views/ProductList/ProductList";

function App() {
  return (
    <Template>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Template>
  );
}

export default App;
