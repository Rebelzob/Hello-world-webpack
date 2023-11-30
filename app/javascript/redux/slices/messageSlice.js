import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/api/v1/messages');
    return response.json();
  }
);

export const messageSlice = createSlice({
  name: 'messages',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.message = action.payload;
      state.loading = false;
    });
  },
});

export default messageSlice.reducer;
