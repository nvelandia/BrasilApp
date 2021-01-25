
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';

function Car (props) {

  const { car, lang } = props;
  const language = lang === 'ru' ? 'pt' : lang;



    return (
    
    <div className="s1-con-img">
        <div className="s1-bg">
              <img src="https://www.avis.com/content/dam/cars/m/2019/ford/2019-ford-fiesta-se-5door-2wd-hatchback-grey_featured.png" alt=""
                   className="car-img" />
        </div>
        <div className="s1-description">
          <button >Grupo {car.VehGroup} ({car.Code})</button>
          <h5>{car.Features2.category}</h5>
          <p>{car.Name}</p>
          <div className="s1-items">
              <div className="d-flex">
                <img src={'/img/chevron-right.svg'} alt=""/>
                <p className="m-0 p-0">{car.Features2.seats} lugares</p>
              </div>
              <div className="d-flex">
                <img src={'/img/chevron-right.svg'} alt=""/>
                <p className="m-0 p-0">{car.Features2.seats} mala grande</p>
              </div>
              <div className="d-flex">
                <img src={'/img/chevron-right.svg'} alt=""/>
                <p className="m-0 p-0">{car.Features2.seats} mala pequeña</p>
              </div>
              <div className="d-flex">
                <img src={'/img/chevron-right.svg'} alt=""/>
                <p className="m-0 p-0">{car.Features2.seats} puertas</p>
              </div>
              <div className="d-flex">
                <img src={'/img/chevron-right.svg'} alt=""/>
                <p className="m-0 p-0">{car.TransmissionType}</p>
              </div>
              <div className="d-flex">
                <img src={'/img/chevron-right.svg'} alt=""/>
                <p className="m-0 p-0">{car.Features2.air}</p>
              </div>
          </div>


        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      lang: state.lang.code,
      place_pickup: state.home.place_pickup, 
      place_dropoff: state.home.place_dropoff, 
      info_user: state.home.info_user
    }
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Car);
