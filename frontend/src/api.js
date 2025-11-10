// frontend/src/api.js
import axios from "axios";

const API_BASE = "http://localhost:5000"; // или твой адрес сервера

const API = axios.create({
    baseURL: API_BASE,
});

// ==== SIDES (конструкции) ====
export const getSides = () => API.get("/sides");
export const getSide = (code) => API.get(`/sides/${code}`);

// BOOKINGS
export const getBookings = () => API.get("/bookings");
export const getBooking = (id) => API.get(`/bookings/${id}`);
export const createBooking = (payload) => API.post("/bookings", payload);
export const updateBooking = (id, payload) => API.put(`/bookings/${id}`, payload);
export const deleteBooking = (id) => API.delete(`/bookings/${id}`);


// ==== LOCATIONS / TYPES / OBJECTS ====
export const getLocations = () => API.get("/locations");
export const getTypes = () => API.get("/construction_types");
export const getObjects = () => API.get("/construction_objects");

// ==== MAINTENANCE ====
export const getMaintenance = () => API.get("/maintenance");

export default API;
