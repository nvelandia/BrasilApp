
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';

function CardMap (props) {

  const { lang, title, date, address } = props;
  const language = lang === 'ru' ? 'pt' : lang;

  useEffect(() => {

  }, [])

  const [fleet, setFleet] = useState([]);

    return (
    
    <div className="s2-cardMaps-container">
        <div><h6>{title}</h6></div>
        <hr/>
        <div className="s2-cardMaps-icon">
            <img src="/img/calendar.svg" alt=""/>
            <p>{date}</p>
        </div>
        <div></div>
        <div className="s2-cardMaps-address">{address}</div>
        <button>VER MAIS INFORMACAO</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardMap);
