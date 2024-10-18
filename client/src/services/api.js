import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const loginUser = async (data) => {
    return await axios.post(`${API_URL}/auth/login`, data);
};

export const registerUser = async (data) => {
    return await axios.post(`${API_URL}/auth/register`, data);
};

export const getSpaces = async () => {
    return await axios.get(`${API_URL}/spaces`);
};

export const getReservations = async () => {
    return await axios.get(`${API_URL}/reservations`);
};
