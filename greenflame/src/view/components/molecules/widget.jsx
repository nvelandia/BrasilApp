import react, { useState } from 'react'; // eslint-disable-line

function Widget (props) {

    const [step0, setStep0 ] = useState({

        placeToPickUp: '',
        placeToDropOff: '',
        dateToPickUp: '',
        dateToDropOff: '',
        ageSelected: '',
        pickup_latitude: '',
        pickup_longitude: '',
        dropoff_latitude: '',
        dropoff_longitude: '',
        pickup_country_code: '',
        dropoff_country_code: '',
        timeToDropOff: '',
        timeToPickUp: '',

    })
    return (
        <div>

        </div>
    )
    
}

export default Widget;