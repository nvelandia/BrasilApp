
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';

function CarSelected (props) {

  const { typeCar, company, brand, property } = props.car;
  const language = props.lang === 'ru' ? 'pt' : props.lang;

  useEffect(() => {

  }, [])

  const [fleet, setFleet] = useState([]);

    return (
    
    <div className="s2-car-container">
        <div className="title">
            <h5>Veiculo slecionado:</h5>
            <h5><span>{typeCar}</span></h5>
        </div>
        <div className="s2-car">
            <div className="s2-car-con">
                <div className="s2-car-brand">
                    <img src='/img/avisbudget_logo.svg' alt={company} />
                    <p>{brand}</p>
                </div>
                <div className="s2-car-img">
                    <img src="https://www.avis.com/content/dam/cars/m/2019/ford/2019-ford-fiesta-se-5door-2wd-hatchback-grey_featured.png" alt=""
                   />
                </div>
            </div>
            <div className="s2-charac">
                <h5>Caracteristicas</h5>
                <div className="s2-items">
                    <div>
                        <img src={'/img/chevron-right.svg'} alt=""/>
                        <p>5 lugares</p>
                    </div>
                    <div>
                        <img src={'/img/chevron-right.svg'} alt=""/>
                        <p>1 mala grande</p>
                    </div>
                    <div>
                        <img src={'/img/chevron-right.svg'} alt=""/>
                        <p>1 mala pequeña</p>
                    </div>
                    <div>
                        <img src={'/img/chevron-right.svg'} alt=""/>
                        <p>4 puertas</p>
                    </div>
                    <div>
                        <img src={'/img/chevron-right.svg'} alt=""/>
                        <p>Transmicion automatica</p>
                    </div>
                    <div>
                        <img src={'/img/chevron-right.svg'} alt=""/>
                        <p>Aire acondicionado</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="s2-car-alert">
            <img src="/img/alert-circle.svg" alt=""/>
            <p>Avis a Budget confirma grupos ou categories e ñao marcas ou modelos de veicuolas, estes sao
                apenas para orientacao e podem variar sem aviso previo. A imagen e apenas para fins ilustrativos.
            </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(CarSelected);
