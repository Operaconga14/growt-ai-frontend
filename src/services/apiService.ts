import axios from "axios";
import { environment } from "../environments/environment";

// Create Axios instance
const api = axios.create({
    baseURL: environment.BASE_URL,
    withCredentials: true
});

// Create get method
export const Get = (endpoint: string) => {
    return api.get(`${endpoint}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
};

// Create post method
export const Post = (endpoint: string, body: Record<string, unknown>) => {
    return api.post(`${endpoint}`, body, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
};

// create patch method
export const Patch = (endpoint: string, body: Record<string, unknown>) => {
    return api.patch(`${endpoint}`, body, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
};

export const Delete = (endpoint: string, params: unknown) => {
    return api.delete(`${endpoint}${params}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
};
