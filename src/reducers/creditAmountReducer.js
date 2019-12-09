const initialState = {
  amount: 5000,
};

function creditAMountReducer(state = initialState, { type, amount }) {
  if (type === 'SET_AMOUNT') {
    return { ...state, amount };
  }
  return { ...state };
}

export default creditAMountReducer;
