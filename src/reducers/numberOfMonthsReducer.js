const initialState = {
  months: 1,
};

function numberOfMonthsReducer(state = initialState, { type, months }) {
  if (type === 'SET_MONTHS') {
    return { ...state, months };
  }
  return { ...state };
}

export default numberOfMonthsReducer;
