
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';

function Step1 (props) {

  const { place_pickup, place_dropoff, info_user, lang } = props;
  const language = lang === 'ru' ? 'pt' : lang;

  const body = { 
      pickup_location: place_pickup.id,
      pickup_company_id: place_pickup.idCompany,
      pickup_country_id: place_pickup.idCountry,
      pickup_date: info_user,
      pickup_time: info_user,
      dropoff_location: place_dropoff.id,
      dropoff_company_id: place_dropoff.idCompany,
      dropoff_country_id: place_dropoff.idCountry,
      dropoff_date: info_user,
      dropoff_time: info_user,
      language: language,
      passenger_country_id: info_user,
      passenger_age: info_user
  }

  useEffect(() => {

  }, [])

  const [fleet, setFleet] = useState([]);

    return (
    
    <div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Step1);
