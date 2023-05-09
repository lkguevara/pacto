import axios from 'axios';
const API_URL = 'http://localhost:3001';

export const getCategoriesWithSubcategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    return [];
  }
};