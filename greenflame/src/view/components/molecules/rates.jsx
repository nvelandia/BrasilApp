
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { Table, Input } from 'reactstrap';

function Rates (props) {

  const { place_pickup, place_dropoff, info_user, lang } = props;
  const language = lang === 'ru' ? 'pt' : lang;

  useEffect(() => {

  }, [])

  const [fleet, setFleet] = useState([]);

    return (
    
    <div>
        <Table hover>
            <thead>
                <tr>
                    <th><span>TARIFAS DISPONIBLES</span></th>
                    <th> </th>
                    <th className="d-flex">
                        <img src={'/img/alert-circle.svg'} alt=""/>
                        <span>PRE-PAGO</span>
                    </th>
                    <th><span>PAGAR NO DESTINO</span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Tarifa</th>
                    <td><span><span>Inclusoes</span></span></td>
                    <td>
                        <Input type="radio" name="radio1" />
                        <span>USD<h5></h5></span>
                    </td>
                    <td>
                        <Input type="radio" name="radio1" />
                        <span>USD<h5></h5></span>
                    </td>
                </tr>
                <tr>
                    <th scope="row">Tarifa</th>
                    <td><span>Inclusoes</span></td>
                    <td>
                        <Input type="radio" name="radio1" />
                        <span>USD<h5></h5></span>
                    </td>
                    <td>
                        <Input type="radio" name="radio1" />
                        <span>USD<h5></h5></span>
                    </td>
                </tr>
                <tr>
                    <th scope="row">Tarifa</th>
                    <td><span>Inclusoes</span></td>
                    <td>
                        <Input type="radio" name="radio1" />
                        <span>USD<h5></h5></span>
                    </td>
                    <td>
                        <Input type="radio" name="radio1" />
                        <span>USD<h5></h5></span>
                    </td>
                </tr>
                <tr>
                    <th scope="row">Tarifa</th>
                    <td><span>Inclusoes</span></td>
                    <td>
                        <Input type="radio" name="radio1" />
                        <span>USD<h5></h5></span>
                    </td>
                    <td>
                        <Input type="radio" name="radio1" />
                        <span>USD<h5></h5></span>
                    </td>
                </tr>
                <tr>
                    <th scope="row">Tarifa</th>
                    <td><span>Inclusoes</span></td>
                    <td>
                        <Input type="radio" name="radio1" />
                        <span>USD<h5></h5></span>
                    </td>
                    <td>
                        <Input type="radio" name="radio1" />
                        <span>USD<h5></h5></span>
                    </td>
                </tr>
            </tbody>
        </Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Rates);