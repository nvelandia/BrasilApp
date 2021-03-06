
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { findFleet } from '../../services/api';
import { res } from './test';
import CardFleet from '../components/organism/cardFleet';
import CardLocation from '../components/molecules/cardLocation';
import FilterFleet from '../components/molecules/filterFleet';


function Step1 (props) {

  const { place_pickup, place_dropoff, info_user, lang } = props;
  const language = lang === 'ru' ? 'pt' : lang;
  const [fleet, setFleet] = useState('');
  
  const [avis, setAvis] = useState('');
  const [budget, setBudget] = useState('');

  const body = { 
      pickup_location: place_pickup.id,
      pickup_company_id: place_pickup.idCompany,
      pickup_country_id: place_pickup.idCountry,
      pickup_date: info_user.pickup_date,
      pickup_time: info_user.pickup_time,
      dropoff_location: place_dropoff.id,
      dropoff_company_id: place_dropoff.idCompany,
      dropoff_country_id: place_dropoff.idCountry,
      dropoff_date: info_user.dropoff_date,
      dropoff_time: info_user.dropoff_time,
      passenger_country_id: info_user.passenger_country_id,
      passenger_age: info_user.passenger_age,
      language

  }

   useEffect(() => {
      findFleet(body)
        .then(response =>  response.data)
        .then(res => setFleet(res))
        .then(x => convertir())
        .catch(error => console.log( error))
  }, [])
  console.log(fleet)

  

  const companies = [];

    // function divideCompany(fleet){
    //     for( const compañia in res){
    //       const tarifas = res[compañia]
    //       companies.push(tarifas);
    //     }
    //     console.log(companies)
    //     searchCars(companies[0])
    // }

    // function searchCars (company) {

    // const unionCors = [];

    //   for (const property in company) {
    //     const unionTarifas = company[property] 
    //     //console.log('flag 2', property, unionTarifas);
    //       for(const cars in unionTarifas ){
    //         console.log('flag 3', cars, unionTarifas[cars])
             
    //       }
    //   }
    // }    
    async function convertir  () {
      const xbudget = Object.values(fleet.cars.Budget) ;
      const xavis = Object.values(fleet.cars.Avis) ;
 
      await  set(xbudget, xavis)
    }

    function set (x, a) {
      setAvis(a);
     setBudget(x);
    }

    console.log('avis:', avis, 'budget:', budget )


    return (
    
    <div>
      <div className="s1-cards-container">
        <div className="s1-cards">
        <CardLocation 
            text={'RETIRADA'}
            date={`${info_user.pickup_date} ${info_user.pickup_time} hs.`}
            place={place_pickup.name}
        />
        <div className="line"></div>
        <CardLocation 
            text={'DEVOLUCAO'}
            date={`${info_user.pickup_date} ${info_user.pickup_time} hs.`}
            place={place_dropoff.name}
        />
        </div>
      </div>
      <FilterFleet/>
      { avis && avis.map((x) => (
        <CardFleet rates={fleet} car={x}/>

      ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Step1);
