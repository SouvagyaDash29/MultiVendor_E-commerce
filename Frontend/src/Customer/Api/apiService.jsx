import axios from "axios";

export const getResults = async (categoryId) => {
  try {
    const response = await axios.get(`http://localhost:8080/products/byCategory/${categoryId}`);
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

