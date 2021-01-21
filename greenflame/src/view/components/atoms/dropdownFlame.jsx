
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    InputGroup, InputGroupAddon, InputGroupText, Input,
    ListGroup, ListGroupItem, CardSubtitle  } from 'reactstrap';

function DropdownFlame (props) {

  const { text, lang, date, place } = props;
  const language = lang === 'ru' ? 'pt' : lang;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const [fleet, setFleet] = useState([]);

    return (
    
    <div className="s1-filter-container ">
        <Dropdown direction="down" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem value={'+25'}>+25</DropdownItem>
                <DropdownItem value={'24'}>24</DropdownItem>
                <DropdownItem value={'23'}>23</DropdownItem>
                <DropdownItem value={'22'}>22</DropdownItem>
                <DropdownItem value={'21'}>21</DropdownItem>
                <DropdownItem value={'20'}>20</DropdownItem>
                <DropdownItem value={'19'}>19</DropdownItem>
                <DropdownItem value={'18'}>18</DropdownItem>
            </DropdownMenu>
        </Dropdown>
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

export default connect(mapStateToProps, mapDispatchToProps)(DropdownFlame);
