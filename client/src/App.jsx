import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import ProductList from './ProductList/ProductList';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


function App() {

  const user = false;
  return (
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList/>} />
        <Route path='/products' element={<ProductList/>} />
        <Route path="/login" element={ user ? <Home/> : <Login/>}/>
        <Route path='/products/:id' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path="/register" element={ user ? <Link to={`/`}/> : <Register/> }/>
      </Routes>
  );
}
export default App ;