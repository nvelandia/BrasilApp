
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { Form, FormGroup, Label, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    InputGroup, InputGroupAddon, InputGroupText, Input,
    ListGroup, ListGroupItem, CardSubtitle  } from 'reactstrap';

function ClientType (props) {

  const { lang } = props;
  const language = lang === 'ru' ? 'pt' : lang;

  const [type, setType] = useState('Nada');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);


    return (

    <div>  
        <div className="s2-ClientType">
            <h6>Tipo de cliente</h6>
            <hr/>
                    <Input type="select" name="select" id="exampleSelect" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="Cliente Final" >Cliente Final</option>
                    <option value="Agencia de viajes" >Agencia de viajes</option>
                    <option value="Cliente Corporativo" >Cliente Corporativo</option>
                    </Input>

            { 
                type === 'Cliente Corporativo' &&
                <div className="s2-ClientType-agency">
                    <div>
                        <Input type="text" placeholder="Nome de usuario"/>
                        <Input type="text" placeholder="Nome de ID do Cliente Corporativo"/>
                    </div>
                    <div>
                        <Input type="text" placeholder="Senha"/>
                        <button>Enviar</button>
                    </div>            
                </div>
            }
            { 
                type === 'Agencia de viajes' &&
                <div className="s2-ClientType-agency">
                    <div>
                        <Input type="text" placeholder="Nome de usuario"/>
                        <Input type="text" placeholder="Nome de ID da Agencia de viagens"/>
                    </div>
                    <div>
                        <Input type="text" placeholder="Senha"/>
                        <button>Enviar</button>
                    </div>            
                </div>
            }     
        </div>
        { 
            type === 'Cliente Final' &&
            <div className="s2-ClientType-client">
                <h6>Dados do passageiro</h6>
                <hr/>
                <div className="s2-ClientType-div1">
                    <div>
                        <Input type="text" placeholder="Nome completo"/>
                        <Input type="text" placeholder="E-mail"/>
                    </div>
                    <div>
                        <Input type="text" placeholder="Sobrenome"/>
                        <div className="s2-ClientType-aplicar">
                            <Input type="text" placeholder="Numero Wizard / RapidRez"/>
                            <button>APLICAR</button>
                        </div>
                    </div>
                </div>
                <div className="s2-ClientType-voo">
                    <h6>Informacion de voo</h6>
                    <div className="s2-ClientType-div2">
                        <div>
                        <Input type="select" name="select" id="exampleSelect" onChange={(e) => setType(e.target.value)}>
                            <option value="Cliente Final" >Cliente Final</option>
                            <option value="Agencia de viajes" >Agencia de viajes</option>
                            <option value="Cliente Corporativo" >Cliente Corporativo</option>
                        </Input>
                        {/* <Input type="select" name="select" id="exampleSelect" onChange={(e) => setType(e.target.value)}>
                            <option value="Cliente Final" >Cliente Final</option>
                            <option value="Agencia de viajes" >Agencia de viajes</option>
                            <option value="Cliente Corporativo" >Cliente Corporativo</option>
                        </Input> */}
                                                <Dropdown direction="down" isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>
                                Filtrar por grupo de veiculo
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
                        <div>
                            <Input type="text" placeholder="Numero de voo:"/>
                            <Input type="text" placeholder="Numero de Membro:"/>
                        </div>
                    </div>

                </div>
            </div>
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientType);
