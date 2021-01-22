import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';

function NamePrice (props) {

  const { lang, text, price } = props;
  const language = lang === 'ru' ? 'pt' : lang;

    return (
        <div className="s2-name-price">
            <p>{text}:</p>
            <p><span>USD {price}</span></p>
        </div>
  )
}

const mapStateToProps = state => {
    return {
      lang: state.lang.code,
    }
}

export default connect(mapStateToProps)(NamePrice);