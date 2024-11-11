
import { createSlice } from '@reduxjs/toolkit';


const API_URL = 'https://6703edfdab8a8f8927323f9c.mockapi.io/api/bikes';

const bikesSlice = createSlice({
  name: 'bikes',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setBikes: (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded';
    },
    addBikeSuccess: (state, action) => {
      state.items.push(action.payload);
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

export const { setBikes, addBikeSuccess, setStatus, setError } = bikesSlice.actions;

export default bikesSlice.reducer;


export const fetchBikes = () => async (dispatch) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    dispatch(setBikes(data));
  } catch (error) {
    dispatch(setError(error.toString()));
  }
};


export const addBike = (newBike) => async (dispatch) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBike),
    });
    const data = await response.json();
    dispatch(addBikeSuccess(data));
  } catch (error) {
    dispatch(setError(error.toString()));
  }
};
