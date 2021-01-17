
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { saludar } from '../../redux/actions/home';
import Carousel from '../components/molecules/carousel';
import Banners from '../components/molecules/banners';
import Footer from '../components/organism/footer';
import { setLanguage } from 'react-redux-multilang';
import  translate from '../../translates/translations';



function Home (props) {

    const handleClick = () => {
        props.saludar();
        setLanguage('es');

    }

    return (
      
        <div>
            <Carousel/>
            <p>{props.cambio.salud} </p>
            <p>{props.cambio.estado}  </p>
            <p>{props.cambio.funciona}  </p>

            <h1>Hello</h1>

            <button onClick={handleClick}>click</button>

            <div>
                <p>{translate.text}</p>
            </div>

            <Banners/>
            <Footer/>

          
            


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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
