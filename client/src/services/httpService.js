import axios from "axios";

const baseURLAndCredentials = {
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
};

export const authAxios = () => (authToken) => {
  axios.create({
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    baseURLAndCredentials,
  });
};

export const requestAxios = axios.create({
  headers: {
    "Content-Type": `application/json`,
  },
  baseURLAndCredentials,
});
