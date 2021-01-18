
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import  translate from '../../../translates/translations';
import { connect } from 'react-redux';
import Inputron from '../atoms/inputron';
import Buttron from '../atoms/buttron';
import Datetime from 'react-datetime';
import TimePicker from 'rc-time-picker';
import { Link } from "react-router-dom";

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';




function Step0 (props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (

        <div className="ho-wi-step0">
            <div className="d-flex align-items-center justify-content-around mb-10">
                <Inputron icon={'/img/map-pin.svg'} placeholder={'Loja de retirada'} classname="input"/>
                <input type="date" className="temp"/>
                <input type="time" className="temp"/>
            </div>
            <div className="d-flex align-items-center justify-content-around mb-10">
                <Inputron icon={'/img/map-pin.svg'} placeholder={'Loja de devolucao'}/>
                <input type="date" className="temp"/>
                <input type="time" className="temp"/>
            </div>
            <div className="d-flex align-items-center justify-content-around">
                <Dropdown direction="down" isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        Idade
                        </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Foo Action</DropdownItem>
                        <DropdownItem>Bar Action</DropdownItem>
                        <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <div className="ho-wid-pro">
                    <img src={'/img/search.svg'} alt=""/>
                    <p className="m-0 p-0">Procurar reserva</p>
                </div>
                <div className="w-20">
                    <Buttron text={'Seleccione o veiculo'}/>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
  return {
      lang: state.lang
  }
}

export default connect(mapStateToProps)(Step0);


 
