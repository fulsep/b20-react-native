const initialState = {
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: 'randomStringFromToken',
      };
    default:
      return state;
  }
};
