import React from 'react'; // eslint-disable-line

import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


function Inputron (props){

    const { placeholder, icon } = props;

return (
    <div >
        <InputGroup >
            <InputGroupAddon addonType="prepend">
                <InputGroupText className="ge-in-img"><img src={icon} className="ge-in-ico"/> </InputGroupText>
            </InputGroupAddon>
            <Input placeholder={placeholder} className="ge-in-pla" />
        </InputGroup>
    </div>
    )
}

export default Inputron;