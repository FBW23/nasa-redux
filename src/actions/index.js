export const fetchData = (payload) => {
  return async (dispatch) => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=yghGbgmgsqGxuNgc4h0ifB4TAO5jSe5gR2uvA2ad`;
    const data = await (await fetch(url)).json();
    dispatch({
      type: 'FETCH_DATA',
      payload: data,
    });
  };
};

export const fetchDay = (payload) => {
  return async (dispatch) => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=yghGbgmgsqGxuNgc4h0ifB4TAO5jSe5gR2uvA2ad&date=${payload}`;
    const data = await (await fetch(url)).json();
    dispatch({
      type: 'FETCH_DATA',
      payload: data,
    });
  };
};
