import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data.js';
import Product from './Product.jsx';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {

  console.log(cat, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    const getProducts = async () => {
      try {
        // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        const res = await axios.get(cat ? `http://localhost:5777/api/products?category=${cat}` : 'http://localhost:5777/api/products');
        console.log(res);
        setProducts(res.data);
      } catch (error) {

      }
    }
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item => Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
      ))
    )
  }, [products, cat, filters]);


  useEffect(() => {
    if ((sort === "newest")) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }
    else if ((sort === "asc")) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }
    else{
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {filteredProducts.map(item => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  )
}

export default Products;
