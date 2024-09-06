
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetails";
import Header from "./components/Header";
// // import Home from "./pages/Home";
// import Header from "./components/Header.jsx";
// // import Products from "./pages/Products.jsx";
// import ProductDetail from "./pages/ProductDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
