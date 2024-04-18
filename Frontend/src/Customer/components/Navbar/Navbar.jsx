import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
// import axios from 'axios';

const Navbar = ({getResults}) => {
  // const [results, setResults] = useState([]);

  // const getResults = async (subcategoryId) => {
  //   try {
  //     const response = await axios.get(`http://localhost:8080/products/subcategory/${subcategoryId}`);
  //     const filterResults = response.data.filter((product) => product.subCategory.subcategoryId === subcategoryId);
  //     console.log(filterResults);
  //     setResults(filterResults);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleFashionClick = () => {
  //   getResults(4); // Fetch products for Fashion (subcategoryId 4)
  // };

  // const handleElectronicsClick = () => {
  //   getResults(5); // Fetch products for Electronics (subcategoryId 5)
  // };

  return (
    <>
      <div className="Navbar">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Fashion" >Fashion</NavLink></li>
          <li><NavLink to="/Electronics">Mobiles</NavLink></li>
          <li><NavLink to="/Watch">Watch</NavLink></li>
          <li><NavLink to="/Shoes">Shoes</NavLink></li>
          <li><NavLink to="/Electronics">Electronics</NavLink></li>
          <li><NavLink to="/HomeApplience">Home Applience</NavLink></li> {/* Fixed typo in path */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
