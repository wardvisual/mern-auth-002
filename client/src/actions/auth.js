import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../consonants/auth";
import { requestAxios } from "../services/httpService";

export const login = (email, login) => (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const { data } = requestAxios.post(`/auth/login`, { email, login });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (firstName, lastName, email, password) => (
  dispatch
) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const { data } = requestAxios.post(`/auth/register`, {
      firstName,
      lastName,
      email,
      password,
    });

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.clear();
  dispatch({ type: USER_LOGOUT, payload: { logout: true } });
  document.location.href("/");
};
