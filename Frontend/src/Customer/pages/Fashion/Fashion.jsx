
import React, { useState } from "react";
import Product from "../../components/Products/Product";
import Brands from "./FashionBrands/Brands";
import Sidebar from "../../components/Sidebar/Sidebar";
import products from "../../DB/data";
import Card from "../../components/Sidebar/SidebarComponets/Card/Card";


const Fashion = () => {
  const [selectCategory, setSelectCategory] = useState(null);

  //---------Input Filter--------
  // const [query, setQuery] = useState("");

  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };

  // const filteredItems = products.filter((product) =>
  //   product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  // );

  //---------Radio Filter--------
  const handleChange = (event) => {
    setSelectCategory(event.target.value);
  };

  //---------Buttons Filter--------
  const handleClick = (event) => {
    setSelectCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering input items
    // if (query) {
    //   filteredProducts = filteredItems;
    // }

    //Selected Filter

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ id, img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={id}
          id={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectCategory);
  // console.log(result);

  return (

    <div>
      <Sidebar handleChange={handleChange} />
      <Brands handleClick={handleClick}/>
      <Product result={result}/>

    </div>

  );
};

export default Fashion;
