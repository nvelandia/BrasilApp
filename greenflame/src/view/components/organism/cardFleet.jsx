
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import Car from '../molecules/car';
import Rates from '../molecules/rates';
import { useHistory } from "react-router-dom";

function CardFleet (props) {

  const { place_pickup, place_dropoff, info_user, lang } = props;
  const language = lang === 'ru' ? 'pt' : lang;
  let history = useHistory();

  useEffect(() => {

  }, [])

  const handleClick = () => {
    history.push('/step2')

  }

    return (
    
    <div className="carFleet">
      <div className="s1-card">
        <Car/>
        <div className="s1-con-table">
          <div >
            <img src="" alt=""/>
            <button onClick={() => handleClick()}>QUIERO RESERVAR AGORA!</button>
          </div>
          <Rates/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      lang: state.lang.code,
      place_pickup: state.home.place_pickup, 
      place_dropoff: state.home.place_dropoff, 
      info_user: state.home.info_user
    }
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardFleet);
