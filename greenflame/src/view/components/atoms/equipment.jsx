import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import NamePrice from './namePrice';

function Equipment (props) {

  const { lang } = props;
  const language = lang === 'ru' ? 'pt' : lang;

    return (
    
    <div>
      <div className="s2-equipment-title">
        <h6>CUSTOS PARA EQUIPAMENTOS OPCIONAIS*</h6>
      </div>
      <div className="s2-equipment">
        <div>
            <NamePrice text={'Assento elevatorio'} price={'0.00'}/>
            <NamePrice text={'Caldeira de bebé'} price={'0.00'}/>
            <NamePrice text={'Cladeira para Criancas'} price={'0.00'}/>
            <NamePrice text={'GPS - Navegador por satelite'} price={'0.00'}/>
            <NamePrice text={'RSN - Assistencia na Rodovia'} price={'0.00'}/>
            <NamePrice text={'eToll Unlimited'} price={'0.00'}/>
            <NamePrice text={'WiFi Móvel'} price={'0.00'}/>
            <NamePrice text={'Rádio por satélite XM'} price={'0.00'}/>
            <NamePrice text={'Protecao dos Objetos Pessoais'} price={'0.00'}/>
            <NamePrice text={'Protecao dos Acidentes Pessoais'} price={'0.00'}/>
        </div>
        <hr/>
        <div className="s2-equipment-total">
            <div>
                <h6>Total de impostos e outras taxas:</h6>
                <p><span>USD  685.23</span></p>
            </div>
            <div>
                <h6>Total equipamento especial:</h6>
                <p><span>USD  685.23</span></p>
            </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      lang: state.lang.code,
    }
}

export default connect(mapStateToProps)(Equipment);