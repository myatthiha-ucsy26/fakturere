import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
