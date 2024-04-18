import axios from "axios";

export const getResults = async (subcategoryId) => {
  try {
    const response = await axios.get(`http://localhost:8080/products/subcategory/${subcategoryId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const productDetail = async (productId) => {
  try {
    const response = await axios.get(`http://localhost:8080/products/getById/${productId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

