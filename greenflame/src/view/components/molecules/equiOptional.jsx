
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NamePrice from '../atoms/namePrice';

function EquiOptional (props) {

  const { lang } = props;
  const language = lang === 'ru' ? 'pt' : lang;

  useEffect(() => {

  }, [])

  const [fleet, setFleet] = useState([]);

    return (
    
    <div className="s2-equipOptional">
        <div>
            <h6>Coberturas / Equipamento opcional</h6>
        </div>
        <hr/>
        <div className="con-phrase">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Sed sit voluptatum aperiam iusto dolor pariatur!</p>
        </div>
        <div>
            <div className="d-flex w-100">
                <div className="s2-equipOptional-three">
                    <div className="d-flex w-100">
                        <img src="/img/plus-circle.svg" alt=""/>
                        <NamePrice text={'Assento elevatorio:'} price={'0.00'}/>
                    </div>
                </div>
                <FormGroup>
                        <Input type="select" name="select" id="exampleSelect">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        </Input>
                </FormGroup>
                <p  className="Quantidade">Quantidade: <span>0</span></p>
            </div>
            <div className="d-flex w-100">
                <div className="s2-equipOptional-three">
                    <div className="d-flex w-100">
                        <img src="/img/plus-circle.svg" alt=""/>
                        <NamePrice text={'Caldeira de bebé'} price={'0.00'}/>
                    </div>
                </div>
                <FormGroup>
                        <Input type="select" name="select" id="exampleSelect">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        </Input>
                </FormGroup>
                <p  className="Quantidade">Quantidade: <span>0</span></p>
            </div>
            <div className="d-flex w-100">
                <div className="s2-equipOptional-three">
                    <div className="d-flex w-100">
                        <img src="/img/plus-circle.svg" alt=""/>
                        <NamePrice text={'Cladeira para Criancas'} price={'0.00'}/>
                    </div>
                </div>
                <FormGroup>
                        <Input type="select" name="select" id="exampleSelect">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        </Input>
                </FormGroup>
                <p className="Quantidade">Quantidade: <span>0</span></p>
            </div>
            
            <div className="s2-equipOptional-select">
                <div className="d-flex w-100">             
                    <img src="/img/plus-circle.svg" alt=""/>
                    <NamePrice text={'GPS - Navegador por satelite'} price={'0.00'}/>
                </div>
                <Input type="checkbox" />
            </div>
            <div className="s2-equipOptional-select">
                <div className="d-flex w-100">
                    <img src="/img/plus-circle.svg" alt=""/>
                    <NamePrice text={'RSN - Assistencia na Rodovia'} price={'0.00'}/>
                </div>
                <Input type="checkbox" />
            </div>
            <div className="s2-equipOptional-select">
                <div className="d-flex w-100">
                    <img src="/img/plus-circle.svg" alt=""/>
                    <NamePrice text={'eToll Unlimited'} price={'0.00'}/>
                </div>
                <Input type="checkbox" />
            </div>
            <div className="s2-equipOptional-select">
                <div className="d-flex w-100">
                    <img src="/img/plus-circle.svg" alt=""/>
                    <NamePrice text={'WiFi Móvel'} price={'0.00'}/>
                </div>
                <Input type="checkbox" />
            </div>
            <div className="s2-equipOptional-select">
                <div className="d-flex w-100">
                    <img src="/img/plus-circle.svg" alt=""/>
                    <NamePrice text={'Rádio por satélite XM'} price={'0.00'}/>
                </div>
                <Input type="checkbox" />
            </div>
            <div className="s2-equipOptional-select">
                <div className="d-flex w-100">
                    <img src="/img/plus-circle.svg" alt=""/>
                    <NamePrice text={'Protecao dos Objetos Pessoais'} price={'0.00'}/>
                </div>
                <Input type="checkbox" />
            </div>
            <div className="s2-equipOptional-select">
                <div className="d-flex w-100">
                    <img src="/img/plus-circle.svg" alt=""/>
                    <NamePrice text={'Protecao dos Acidentes Pessoais'} price={'0.00'}/>
                </div>
                <Input type="checkbox" />
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
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EquiOptional);
