
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import  translate from '../../../translates/translations';
import { connect } from 'react-redux';
import Step0 from './step0';


function Widget (props) {

    return (

        <div className="widget">
            <div className="widget-con">
                <div className="d-flex justify-content-center">
                    <img src={'/img/compass.svg'} alt=""/>
                    <h6>{translate.home.widget.title}
                        <span>{translate.home.widget.title2}</span>
                    </h6>
                </div>
                <div className="w-100 my-10">
                    <Step0/>
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

export default connect(mapStateToProps)(Widget);
