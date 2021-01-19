
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import Carousel from '../components/molecules/carousel';
import Banners from '../components/molecules/banners';
import Widget from '../components/organism/widget';


function Home (props) {

    return (
        <div>
            <Carousel/>
            <Widget/>
            <Banners/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        lang: state.lang
    }
}

export default connect(mapStateToProps)(Home);
