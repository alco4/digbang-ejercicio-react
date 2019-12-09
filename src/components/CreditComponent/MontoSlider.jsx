import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import style from './credit-component.scss';
import setCreditAmount from '../../actions/setCreditAmount';

const SliderWithTooltip = createSliderWithTooltip(Slider);
const { montoTotal, montoTotalTitle, montoTotalValue } = style;

class MontoSlider extends Component {
  static get propTypes() {
    return {
      amount: PropTypes.number,
      setCreditAmountConnect: PropTypes.func,
    };
  }

  formatAmount() {
    const { amount } = this.props;
    return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  render() {
    const { amount, setCreditAmountConnect } = this.props;
    return (
      <div>
        <div className={montoTotal}>
          <p className={montoTotalTitle}>MONTO TOTAL</p>
          <p className={montoTotalValue}>$ {this.formatAmount()}</p>
        </div>

        <SliderWithTooltip
          min={5000}
          max={50000}
          step={500}
          value={amount}
          onChange={newVal => setCreditAmountConnect(newVal)}
          className={style.slider}
          railStyle={{
            height: 4,
          }}
          handleStyle={{
            height: 28,
            width: 28,
            marginLeft: -14,
            marginTop: -14,
            backgroundColor: 'white',
            border: 0,
          }}
          trackStyle={{
            background: 'none',
          }}
        />
        <div className={style.montosMinMAx}>
          <p>$ 5.000</p>
          <p>$ 50.000</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setCreditAmountConnect: setCreditAmount,
};

const mapStateToProps = state => ({
  amount: state.creditAmountReducer.amount,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MontoSlider);
