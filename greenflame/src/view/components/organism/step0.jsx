
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import  translate from '../../../translates/translations';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { autoComplete, findLocation } from '../../../services/api';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    InputGroup, InputGroupAddon, InputGroupText, Input,
    ListGroup, ListGroupItem, CardSubtitle  } from 'reactstrap';
import { place_pickup, place_dropoff, info_user, clear_home } from '../../../redux/actions/home'; 

function Step0 (props) {

    const { place_pickup, place_dropoff, info_user, clear_home } = props;
    const language = props.lang === 'ru' ? 'pt' : props.lang;
    let history = useHistory();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    let inputProps = { placeholder: moment().format("DD/MM/YYYY")}
    let yesterday = moment().subtract(1, "day");
    
    function valid(current) {
    return current.isAfter(yesterday);
    }

    const [ date, setDate] = useState({
        startDate: '',
        startTime:'',
        endDate:'',
        endTime:''
    });
    const [ age, setAge ] = useState('');
    const [ startLocation, setStartLocation ] = useState([]);
    const [ endLocation, setEndLocation ] = useState([]);
    const [ startLocationFocus, setStartLocationFocus ] = useState(false);
    const [ endLocationFocus, setEndLocationFocus ] = useState(false);

    function dateTime (e, name) {
        var m;   
        if(name.includes('Time')){
             m = moment(e._d).format("HH:mm");
        }
        else{ m = moment(e._d).format("YYYY-MM-DD");
        }
        setDate(prevState => ({...prevState, [name]: m }))
    }

    const handleOnChange = (e, name) => {   
        if(e.target.value.length > 2){
            if(name === 'startLocation'){
                findLocation({location: e.target.value})
                    .then(response =>  response.data)
                    .then(res => setStartLocation(res))
                    .catch(error => console.log( error))
            }
            else {
                findLocation({location: e.target.value})
                    .then(response =>  response.data)
                    .then(res => setEndLocation(res))
                    .catch(error => console.log( error))
            }
        }      
    }

    const renderList = (name) => {
        if(name === 'startLocation'){
            return (<ListGroup className="ho-wi-list">
                        { startLocation && startLocation.map((place, i) => (
                            <ListGroupItem  
                                key={i} 
                                onMouseDown={() => handleOnSelect(place, name)}>
                            {place.name}
                            </ListGroupItem>   
                        ))}
                    </ListGroup>)}
        else {
            return (<ListGroup className="ho-wi-list">
                        { endLocation && endLocation.map((place, i) => (
                            <ListGroupItem  
                            key={i} 
                            onMouseDown={() => handleOnSelect(place, name)}>
                            {place.name}
                            </ListGroupItem>   
                        ))}
                    </ListGroup>)}
    }

    const handleOnSelect = (place, name) => {
        if(name === 'startLocation'){
            place_pickup(place)
        } else {
            place_dropoff(place)
        }
    }

    const nextStep = () => { 
        const body = {
            pickup_date: date.startDate,
            pickup_time: date.startTime,
            dropoff_date: date.endDate,
            dropoff_time: date.endTime,
            passenger_country_id: 31,
            passenger_age: age
        }

        // if(todo los datos estan bien){
        //     info_user(body)
        //     history.push('/step1')
        // } else {
        //     error gil
        // }
        info_user(body)
        history.push('/step1')
    }

    return (

        <div className="ho-wi-step0">
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-around mb-2">
                <div>
                <InputGroup >
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText className="ge-in-img"><img src={'/img/map-pin.svg'} alt='' className="ge-in-ico"/> </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                        placeholder={'Loja de retirada'} 
                        className="ge-in-pla" 
                        onChange={(e) => handleOnChange(e, 'startLocation')}
                        onFocus={() => setStartLocationFocus(true)}
                        onBlur={() => setStartLocationFocus(false)}
                    />
                </InputGroup>
                { startLocationFocus && renderList('startLocation')}                                
                </div>
                <Datetime               
                    inputProps={inputProps}
                    isValidDate={valid}
                    onChange={(e) => dateTime(e, 'startDate')}
                    timeFormat={false}
                    name='startDate'
                    dateFormat={"DD/MM/YYYY"}
                    
                />
                <Datetime 
                    dateFormat={false} 
                    name='startTime'
                    onChange={(e) => dateTime(e, 'startTime')}
                    timeFormat={'HH:mm'}
                    timeConstraints={{ minutes: { step: 30 } }}
                />
            </div>
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-around mb-2">
               <div>
                <InputGroup >
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText className="ge-in-img"><img src={'/img/map-pin.svg'} alt='' className="ge-in-ico"/> </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                        placeholder={'Loja de devolucao'} 
                        className="ge-in-pla" 
                        onChange={(e) => handleOnChange(e, 'endLocation')}
                        onFocus={() => setEndLocationFocus(true)}
                        onBlur={() => setEndLocationFocus(false)}
                    />
                </InputGroup>
                { endLocationFocus && renderList('endLocation')}
                </div>
                <Datetime               
                    inputProps={inputProps}
                    isValidDate={valid}
                    onChange={(e) => dateTime(e, 'endDate')}
                    timeFormat={false}
                    dateFormat={"DD/MM/YYYY"}
                />
                <Datetime 
                    dateFormat={false} 
                    name='endTime'
                    onChange={(e) => dateTime(e, 'endTime')}
                    timeFormat={'HH:mm'}
                    timeConstraints={{ minutes: { step: 30 } }}
                />
            </div>

            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-around">
                <Dropdown direction="down" isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        {age ? age : 'Idade'}
                        </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={(e) => setAge(e.target.value) } value={'+25'}>+25</DropdownItem>
                        <DropdownItem onClick={(e) => setAge(e.target.value) } value={'24'}>24</DropdownItem>
                        <DropdownItem onClick={(e) => setAge(e.target.value) } value={'23'}>23</DropdownItem>
                        <DropdownItem onClick={(e) => setAge(e.target.value) } value={'22'}>22</DropdownItem>
                        <DropdownItem onClick={(e) => setAge(e.target.value) } value={'21'}>21</DropdownItem>
                        <DropdownItem onClick={(e) => setAge(e.target.value) } value={'20'}>20</DropdownItem>
                        <DropdownItem onClick={(e) => setAge(e.target.value) } value={'19'}>19</DropdownItem>
                        <DropdownItem onClick={(e) => setAge(e.target.value) } value={'18'}>18</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <div className="ho-wid-pro">
                    <img src={'/img/search.svg'} alt=""/>
                    <p className="m-0 p-0">Procurar reserva</p>
                </div>
                <div className="w-20">
                    {/* <Buttron text={'Seleccione o veiculo'} onClick={nextStep()} /> */}
                    <button onClick={() => nextStep()}>Seleccione o veiculo</button>
                </div>
            </div>

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
        place_pickup: (payload) => dispatch(place_pickup(payload)), 
        place_dropoff: (payload) => dispatch(place_dropoff(payload)),
        info_user: (payload) => dispatch(info_user(payload)),
        clear_home: () => dispatch(clear_home()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Step0);