import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import NamePrice from './namePrice';

function Taxes (props) {

  const { lang } = props;
  const language = lang === 'ru' ? 'pt' : lang;

    return (
    <div>
      <div className="s2-taxes-title">
        <h6>DETALHES DE IMPOSTOS E OUTRAS TAXAS</h6>
      </div>
      <div className="s2-taxes">    
            <NamePrice text={'Taxa Aeroporto'} price={'71.04'}/>
            <NamePrice text={'Taxa local'} price={'0.00'}/>
            <NamePrice text={'Taxa para Criancas'} price={'0.00'}/>
            <NamePrice text={'Taxa - Navegador por satelite'} price={'10.00'}/>
            <NamePrice text={'Taxa - Assistencia na Rodovia'} price={'0.00'}/>
            <NamePrice text={'Sobretaxa de Energía'} price={'6.00'}/>
            <NamePrice text={'Sobretaxa Estadual'} price={'20.00'}/>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      lang: state.lang.code,
    }
}

export default connect(mapStateToProps)(Taxes);