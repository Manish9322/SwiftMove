import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../services/api';

const initialState = {
  form: {
    name: '',
    email: '',
    reason: '',
    message: '',
  },
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { field, value } = action.payload;
      state.form[field] = value;
    },
    resetForm: (state) => {
      state.form = initialState.form;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.addContact.matchPending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addMatcher(api.endpoints.addContact.matchFulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addMatcher(api.endpoints.addContact.matchRejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setFormField, resetForm } = contactSlice.actions;

export default contactSlice.reducer;
