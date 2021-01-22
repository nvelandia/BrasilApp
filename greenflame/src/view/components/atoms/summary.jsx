import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import NamePrice from './namePrice';

function Summary (props) {

  const { lang } = props;
  const language = lang === 'ru' ? 'pt' : lang;

    return (
    
    <div className="s2-summary">
      <div className="s2-summary-icon">
          <p>Resumo</p>
      </div>
      <hr/>
      <div className="s2-summary-icon">
           <img src="/img/list.svg" alt=""/>
          <p>Tarifa selecionada</p>
      </div>
      <hr/>
      <div className="s2-summary-icon">
        <p>B9 -Inclusive LDW</p>
      </div>
      <div className="s2-summary-charac">
            <div>
              <img src="/img/check.svg" alt=""/>
              <p>Milhagem livre</p>
            </div>
            <div>
              <img src="/img/check.svg" alt=""/>
              <p>LDW - Loss Damage Waiver</p>
            </div>
            <div>
              <img src="/img/check.svg" alt=""/>
              <p>Primeiro motorista adicional</p>
            </div>
      </div>
      <hr/>
      <div className="s2-summary-icon">
          <img src="/img/clock.svg" alt=""/>
          <p>Peíodo de locacao: 9 dias</p>
      </div>
      <hr/>
      <div className="s2-summary-icon">
          <img src="/img/calendar.svg" alt=""/>
          <p>Detalhes das taxas</p>
      </div>
      <div className="s2-summary-price">
          <NamePrice text={'Tarifa básica'} price={'474.39'}/>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      lang: state.lang.code,
    }
}

export default connect(mapStateToProps)(Summary);