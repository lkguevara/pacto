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

// Función para obtener todos los usuarios
export const getAllUsers = async () => {
    try {
        const response = await axios.get(`/users`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        alert('Error al obtener usuarios');
    }
};