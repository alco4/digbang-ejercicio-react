const SET_CUOTA = 'SET_CUOTA';

const setCuota = (amount, months) => ({
  type: SET_CUOTA,
  amount,
  months,
});

export default setCuota;
