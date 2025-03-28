import axios from "axios";

const getToken = () => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    return null;
  }
  return token;
};

const getHeaders = (isFormData: boolean = false) => {
  const authToken = getToken();
  const headers = {
    "Content-Type": isFormData ? "multipart/form-data" : "application/json",
    ...(authToken && { Authorization: `Bearer ${authToken}` }),
  };
  return headers;
};

export const apiGetAll = async (apiName: string) => {
  const headers = getHeaders();
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/${apiName}`, { headers });
  return res;
};

export const apiGetOne = async (apiName: string, id: string) => {
  const headers = getHeaders();
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/${apiName}/${id}`, { headers });
  return res;
};

export const apiPostJson = async <T>(apiName: string, data: T) => {
  const headers = getHeaders();
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/${apiName}`, data, { headers });
  return res;
};

export const apiPostFormData = async (apiName: string, data: FormData) => {
  const headers = getHeaders(true);
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/${apiName}`, data, { headers });
  return res;
};

export const apiPutJson = async <T>(apiName: string, data: T) => {
  const headers = getHeaders();
  const res = await axios.put(`${import.meta.env.VITE_API_URL}/${apiName}`, data, { headers });
  return res;
};

export const apiPutFormData = async (apiName: string, data: FormData) => {
  const headers = getHeaders(true);
  const res = await axios.put(`${import.meta.env.VITE_API_URL}/${apiName}`, data, { headers });
  return res;
};

export const apiDelete = async (apiName: string, id: string) => {
  const headers = getHeaders();
  const res = await axios.delete(`${import.meta.env.VITE_API_URL}/${apiName}/${id}`, { headers });
  return res;
};
