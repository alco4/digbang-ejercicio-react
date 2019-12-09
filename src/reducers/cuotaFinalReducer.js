const initialState = {
  cuotaFinal: 5000,
};

function cuotaFinalReducer(state = initialState, { type, amount, months }) {
  if (type === 'SET_CUOTA') {
    const cuotaFinal = amount / months;
    return { ...state, cuotaFinal };
  }
  return { ...state };
}

export default cuotaFinalReducer;
