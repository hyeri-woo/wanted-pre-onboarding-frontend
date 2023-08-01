import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: { email: '', password: '' },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    reset: (state) => {
      state.email = '';
      state.password = '';
    },
  },
});

export default accountSlice;
