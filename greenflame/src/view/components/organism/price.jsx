
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import Summary from '../atoms/summary';
import Taxes from '../atoms/taxes';
import Equipment from '../atoms/equipment';
import Total from '../atoms/total';
import Confirm from '../atoms/confirm';


function Price (props) {

  const { lang } = props;
  const language = lang === 'ru' ? 'pt' : lang;

  useEffect(() => {

  }, [])

  const [fleet, setFleet] = useState([]);

    return (
    
    <div className="s2-prices">
        <Summary />
        <Taxes />
        <Equipment/>
        <Total />
        <Confirm />

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

export default connect(mapStateToProps, mapDispatchToProps)(Price);
