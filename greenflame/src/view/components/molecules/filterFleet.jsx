
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import DropdownFlame from '../atoms/dropdownFlame';

function FilterFleet (props) {

  const { text, lang, date, place } = props;
  const language = lang === 'ru' ? 'pt' : lang;

  const [fleet, setFleet] = useState([]);

    return (
    
    <div className="s1-filter-container ">
        <div className="s1-filter">
                <div className="s1-filter-divide">
                    <h6>FILTRAR RESULTADOS POR</h6>
                </div>
                <div className="s1-filter-hr"></div>
                <div className="s1-filter-checkbox">
                    <div>
                        <input type="checkbox"/>
                        <h6>Avis</h6>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <h6>Budget</h6>
                    </div>
                </div>
                <div className="s1-filter-drown-con">
                  <DropdownFlame/>
                  <DropdownFlame/>
                </div>
                <div className="s1-filter-drown-con">
                  <DropdownFlame/>
                  <DropdownFlame/>
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterFleet);
