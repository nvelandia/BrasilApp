
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { saludar } from '../../redux/actions/home';
import Footer from '../components/organism/footer';




function Step1 (props) {

    return (
      
        <div>
           
            <p>{props.cambio.salud} </p>
            <p>{props.cambio.estado}  </p>
            <p>{props.cambio.funciona}  </p>

            <h1>Hello</h1>

            <button onClick={() => props.saludar()}>click</button>


            <Footer/>

          
            


        </div>
    )
}

const mapStateToProps = state => {
    return {
        cambio: state.home
    }
}

const mapDispatchToProps = dispatch => {
	return {
		saludar: () => dispatch(saludar())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1);
