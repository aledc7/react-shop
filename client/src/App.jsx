import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import ProductList from './ProductList/ProductList';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
function App() {
  return (
    <>




      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products/:category/' element={<ProductList/>} />
        <Route path='/products/:id/' element={<Product/>} />
        <Route path='/cart/' element={<Cart/>} />
        <Route path='/login/' element={<Login/>} />
        <Route path='/register/' element={<Register/>} />
        
      </Routes>





    </>
  );
}
export default App ;