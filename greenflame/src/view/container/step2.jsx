
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import  translate from '../../translates/translations';
import { connect } from 'react-redux';
import { setLanguage } from 'react-redux-multilang';


function Step2 (props) {

    const handleClick = () => {
        props.saludar();
        setLanguage('es');
    
    }
    

    return (

        <div>
             <p>{props.cambio.salud} </p>
            <p>{props.cambio.estado}  </p>
            <p>{props.cambio.funciona}  </p>

            <h1>Hello</h1>

            <button onClick={handleClick}>click</button>

            <div>
                <p>{translate.text}</p>
            </div>


        </div>
    )
}

const mapStateToProps = state => {
    return {
        cambio: state.home,
        lang: state.lang
    }
}

const mapDispatchToProps = dispatch => {
	return {
		saludar: () => dispatch(saludar())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
