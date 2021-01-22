
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';

function Confirm (props) {

  const { lang } = props;
  const language = lang === 'ru' ? 'pt' : lang;

    return (
        <div className="s2-confirm">
            <div>
                <p>(1) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, dignissimos!</p><br/>
                <p>(2) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, dignissimos!</p><br/>
                <p>(3) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, dignissimos!</p><br/>
            </div>
            <div className="s2-confirm-checkbox">
                <input type="checkbox"/>
                <p>Li e aceito os termos e condiciones en vigor no pais de destino</p>
            </div>
            <button>CONFIRMAR A RESERVA</button>
        </div>
  )
}

const mapStateToProps = state => {
    return {
      lang: state.lang.code,
    }
}

export default connect(mapStateToProps)(Confirm);
