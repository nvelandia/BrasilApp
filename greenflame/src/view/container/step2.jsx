
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import  translate from '../../translates/translations';
import { connect } from 'react-redux';
import { setLanguage } from 'react-redux-multilang';
import CarSelected from '../components/atoms/carSelected';
import Price from '../components/organism/price';
import CardMap from '../components/molecules/cardMap';
import EquiOptional from '../components/molecules/equiOptional';


function Step2 (props) {
    const car = {
        typeCar: 'Economico ( Grupo A - ECAR )',
         company: 'budget', 
         brand: 'Ford Fiesta o similar',
         property: {
             lugares : '5lugares',
             grande: '1 mala grande',
             pequeña: '1 mala pequeña',
             puertas: '4 puertas',
             transmissao: 'transmissao automatica',
             Air: 'Air condicionado'
         }
    }

   
    
    return (

        <div className="s2">
            <div className="s2-container">

                {/* <h1>Hello</h1>

                <button onClick={() => setLanguage('es')}>click</button>

                <div>
                    <p>{translate.text}</p>
                </div> */}
                <div className="s2-con-left">
                    <CarSelected car={car} />
                    <div className="s2-card-maps">
                        <CardMap 
                            title={'Voce retira o veiculo:'} 
                            date={'20 de setembro de 2020, 20:00hs.'} 
                            address={'Miami Intl Airport (MIA)'}/>
            
                            <CardMap 
                            title={'Voce devolve o veiculo:'} 
                            date={'30 de setembro de 2020, 20:00hs.'} 
                            address={'Miami Intl Airport (MIA)'}/>
                    
                    </div>
                    <EquiOptional/>
                </div>
                <div className="s2-con-right">
                    <Price/>
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

const mapDispatchToProps = dispatch => {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
