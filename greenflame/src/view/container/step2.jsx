
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import  translate from '../../translates/translations';
import { connect } from 'react-redux';
import { setLanguage } from 'react-redux-multilang';


function Step2 (props) {
    
    return (

        <div>


            <h1>Hello</h1>

            {/* <button onClick={handleClick}>click</button> */}

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
