import React, { Component } from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!rc-slider/assets/index.css';
import PropTypes from 'prop-types';
import style from './credit-component.scss';
import MontoSlider from './MontoSlider';
import PlazoSlider from './PlazoSlider';
import CuotaFinal from './CuotaFinal';

const { mainTitle, creditContainer } = style;

class CreditComponent extends Component {
  static get propTypes() {
    return {
      title: PropTypes.string,
    };
  }

  render() {
    const { title } = this.props;
    return (
      <div className={creditContainer}>
        <div className={mainTitle}>
          <h2>{title}</h2>
        </div>

        <MontoSlider />

        <PlazoSlider />

        <CuotaFinal />

        <div className={style.buttonActions}>
          <input
            className={style.obteneCredito}
            value="OBTENÉ CRÉDITO"
            type="button"
          />
          <input
            className={style.detalleCuota}
            value="VER DETALLE DE CUOTAS"
            type="button"
          />
        </div>
      </div>
    );
  }
}

export default CreditComponent;
