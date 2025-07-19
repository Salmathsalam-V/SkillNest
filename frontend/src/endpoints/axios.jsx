import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/';
const LOGIN_URL = `${BASE_URL}login/`;

export const login = async (username, password) => {
  try {
    const response = await axios.post(
      LOGIN_URL,
      { username, password },
      { withCredentials: true } // Sends and receives cookies
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message };
  }
};
