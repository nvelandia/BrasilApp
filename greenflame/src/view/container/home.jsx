
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { saludar } from '../../redux/actions/home';
import Carousel from '../components/molecules/carousel';
import Banners from '../components/molecules/banners';
import Footer from '../components/organism/footer';
import Widget from '../components/organism/widget';




function Home (props) {

    return (
      
        <div>
            <Carousel/>
            <Widget/>
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
