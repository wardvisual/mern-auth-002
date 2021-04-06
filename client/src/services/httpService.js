import axios from "axios";

axios.defaults.baseURL = `http://localhost:5050/api`;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
