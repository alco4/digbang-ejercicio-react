import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import setCuotaFinal from '../../actions/setCuotaFinal';
import style from './credit-component.scss';

const { cuotaMes, cuotaTitle, cuotaAmount } = style;

class CuotaFinal extends Component {
  static get propTypes() {
    return {
      amount: PropTypes.number,
      months: PropTypes.number,
      cuotaFinal: PropTypes.number,
      setCuotaFinalConnect: PropTypes.func,
    };
  }

  componentDidMount() {
    const { amount, months, setCuotaFinalConnect } = this.props;
    setCuotaFinalConnect(amount, months);
  }

  componentDidUpdate(prevProps) {
    const { amount: prevAmount, months: prevMonths } = prevProps;
    const { amount, months, setCuotaFinalConnect } = this.props;
    if (prevAmount !== amount || prevMonths !== months) {
      setCuotaFinalConnect(amount, months);
    }
  }

  currencyFormat() {
    const { cuotaFinal } = this.props;
    return (
      '$' + cuotaFinal.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    );
  }

  render() {
    return (
      <div className={cuotaMes}>
        <p className={cuotaTitle}>CUOTA FIJA POR MES</p>
        <p className={cuotaAmount}>{this.currencyFormat()}</p>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setCuotaFinalConnect: setCuotaFinal,
};

const mapStateToProps = state => ({
  cuotaFinal: state.cuotaFinalReducer.cuotaFinal,
  amount: state.creditAmountReducer.amount,
  months: state.numberOfMonthsReducer.months,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CuotaFinal);
