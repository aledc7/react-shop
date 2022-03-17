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

const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);


  useEffect(()=>{
    const getProducts = async ()=>{
      try {
        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        const res = await axios.get("http://localhost:5777/api/products/")
        console.log(res);
      } catch (error) {

      }
    }
    getProducts();
  },[cat]);
    return (
        <Container>
            {popularProducts.map(item =>(
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products;
