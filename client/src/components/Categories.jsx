import styled from 'styled-components';
import { CategoryItem } from './CategoryItem.jsx';
import { mobile } from '../responsive';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
    display:flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({padding: "0px", flexDirection:"column"})}
`;



const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const cat = await axios.get('http://localhost:5777/api/categories');
        setCategories(cat.data);
      } catch (error) {
        console.error(`error: ${error}`);
      }
    }
    getCategories();
  }, []);

    return (
        <Container>
            {categories.map((item) =>(
                <CategoryItem item={item} key={item._id}  />
            ))}

        </Container>
    )
}

export default Categories
