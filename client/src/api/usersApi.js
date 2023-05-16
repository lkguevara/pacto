import axios from 'axios';

// Función para banear usuario
export const banUser = async (id) => {
    try {
        const response = await axios.put(`/banuser`, { "id": id });
        return response.data;
    } catch (error) {
        console.error('Error al bloquear usuario:', error);
        alert('Error al bloquear usuario');
    }
};

// Función para obtener todos los usuarios de la página actual
export const getAllUsers = async (page) => {
    try {
        const response = await axios.get(`/users?page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        return [];
    }
};