import axios from "axios";

const api = axios;

export const initApi = (apiUrl: string): void => {
  api.defaults.baseURL = apiUrl;
  api.defaults.headers.common['Content-Type'] = 'application/json';
}

export default api;