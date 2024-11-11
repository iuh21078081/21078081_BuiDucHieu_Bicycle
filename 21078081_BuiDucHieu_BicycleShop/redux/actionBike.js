
const API_URL = 'https://6703edfdab8a8f8927323f9c.mockapi.io/api/bikes';


export const fetchBikes = () => async (dispatch) => {
    dispatch(setStatus('loading'));
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch(setBikes(data));
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
  
  // Action để thêm sản phẩm mới vào API
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

  export const fetchBikeById = (id) => async (dispatch) => {
    dispatch(setStatus('loading'));
    try {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();
      dispatch(setBikeDetail(data));
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };