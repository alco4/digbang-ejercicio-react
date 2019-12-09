import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import style from './credit-component.scss';
import setNumberOfMonths from '../../actions/setNumberOfMonths';

const SliderWithTooltip = createSliderWithTooltip(Slider);
const { plazo, plazoTitle, plazoValue } = style;

class PlazoSlider extends Component {
  static get propTypes() {
    return {
      months: PropTypes.number,
      setNumberOfMonthsConnect: PropTypes.func,
    };
  }

  render() {
    const { months, setNumberOfMonthsConnect } = this.props;

    return (
      <div>
        <div className={plazo}>
          <p className={plazoTitle}>PLAZO</p>
          <p className={plazoValue}>{months}</p>
        </div>

        <SliderWithTooltip
          min={1}
          max={24}
          value={months}
          onChange={newVal => {
            setNumberOfMonthsConnect(newVal);
          }}
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
        <div className={style.plazosMinMax}>
          <p>1</p>
          <p>24</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setNumberOfMonthsConnect: setNumberOfMonths,
};

const mapStateToProps = state => ({
  months: state.numberOfMonthsReducer.months,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlazoSlider);
