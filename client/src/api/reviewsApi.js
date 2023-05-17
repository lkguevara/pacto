import axios from 'axios';

export const addReview = async (review) => {
    try {
      const response = await axios.post(`/review`, review);
      const newReviewId = response.data;
      return newReviewId;
    } catch (error) {
      console.error('Error al registrar la review', error);
      alert('Error al registrar la review');
      return null;
    }
};