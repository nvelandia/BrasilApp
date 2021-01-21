
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

function CardLocation (props) {

  const { text, lang, date, place } = props;
  const language = lang === 'ru' ? 'pt' : lang;

  const [fleet, setFleet] = useState([]);

    return (
    
    <div className="s1-cardLocal">
        <h5>{text}</h5>
        <div className="s1-startDate">  
                <InputGroup >
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText className="ge-in-img"><img src='/img/calendar.svg' alt='' className="ge-in-ico"/> </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                            value={date}
                            disabled={true}
                        />
                </InputGroup>
            <button>Trocar</button>
        </div>
        <div className="address">
            <img src="/img/map-pin.svg" alt=""/>
            <div>
                <p>{place}</p>
                <span>Consulte mapa e horarios de atendimiento</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardLocation);
