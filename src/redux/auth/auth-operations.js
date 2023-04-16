import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

console.log(clearAuthHeader);
export const register = createAsyncThunk(
  ' auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);

      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  ' auth/login',
  async (credentials, thunkAPI) => {}
);
export const logOut = createAsyncThunk(
  ' auth/logout',
  async (_, thunkAPI) => {}
);
export const refreshUser = createAsyncThunk(
  ' auth/refresh',
  async (_, thunkAPI) => {}
);
