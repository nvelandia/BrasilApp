import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';

function Total (props) {

  const { lang } = props;
  const language = lang === 'ru' ? 'pt' : lang;

    return (
    
    <div className="s2-total">
      <div>
          <h6>TOTAL ESTIMADO</h6>
          <p>USD<span>836.19</span></p>
      </div>
      <hr/>
      <div>
          <h6>TOTAL PRÉ-PAGO</h6>
          <p>USD<span>685.23</span></p>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      lang: state.lang.code,
    }
}

export default connect(mapStateToProps)(Total);