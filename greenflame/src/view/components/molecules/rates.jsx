
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { Table, Input } from 'reactstrap';

function Rates (props) {

  const { rates, lang } = props;
  const language = lang === 'ru' ? 'pt' : lang;

    return (
    
        <div>   
            <div className="s1-rates-title">
                <p>TARIFAS DISPONIBLES</p>
                <div className='s1-rates-pay'>
                    <div>
                        <img src={'/img/alert-circle.svg'} alt=""/>
                        <p>PRE-PAGO</p>
                    </div>
                    <p>PAGAR NO DESTINO</p>
                </div>
            </div>         
            {/* { rates && rates.map((x) => ( 
                <div className="s1-rates">
                    <p>4M - Inclusive LDW</p>
                    <p className="s1-rates-inclusoes">Inclusoes</p>
                    <div>
                        <Input type="radio" name="radio1" />
                        <p>USD  <span>656.72</span></p>
                    </div>
                    <div>
                        <Input type="radio" name="radio1" />
                        <p>USD  <span>756.72</span></p>
                    </div> 
                </div>
            )) } */}
        </div>
  )
}

const mapStateToProps = state => {
    return {
      lang: state.lang.code,
    }
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Rates);