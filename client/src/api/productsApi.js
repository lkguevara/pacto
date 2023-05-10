import axios from 'axios';
// const API_URL = 'http://localhost:3001';

export const addProduct = async (product) => {
    try {

      const response = await axios.post(`/product`, product);
      const newProduct = response.data;
      return newProduct;
    } catch (error) {
      console.error('Error al crear el producto', error);
      throw error;
    }
};