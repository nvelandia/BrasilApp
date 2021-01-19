
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import  translate from '../../translates/translations';
import { connect } from 'react-redux';


function Step2 (props) {

    const handleClick = () => {
    
        setLanguage('es');
    
    }
    

    return (

        <div>


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
        lang: state.lang
    }
}

const mapDispatchToProps = dispatch => {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
