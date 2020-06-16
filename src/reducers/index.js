const initialState = {
  photoOftheDay: {},
};

const nasaReducer = (state = initialState, action) => {
  if (action.type === 'FETCH_DATA') {
    return Object.assign({}, state, { photoOftheDay: action.payload });
  }

  return state;
};

export default nasaReducer;
