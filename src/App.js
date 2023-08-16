import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageContainer from "./components/PageContainer/PageContainer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CartDetail from "./components/Home/CartDetail";
import Cart from "./components/Home/Cart";

function App() {
  return (
    <div className="App">
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<CartDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;
