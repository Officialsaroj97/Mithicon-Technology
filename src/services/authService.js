import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const signup = async (name, email, password) => {
  try {
    const response = await API.post("/signup", { name, email, password });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const login = async (email, password) => {
  try {
    const response = await API.post("/signin", { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
