
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { saludar } from '../../redux/actions/home';
import Navbar from '../components/molecules/nabvar';
import Carousel from '../components/molecules/carousel';


function Home (props) {

    return (
      
        <div>
            <p>{props.cambio.salud} </p>
            <p>{props.cambio.estado}  </p>
            <p>{props.cambio.funciona}  </p>

            <h1>Hello</h1>

            <button onClick={() => props.saludar()}>click</button>

            <Carousel/>
            <Navbar/>

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
