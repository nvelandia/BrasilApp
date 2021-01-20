
import axios from 'axios';

const host = "http://192.168.0.40:8000/api/";

//Requests

export const findLocation = (body, language) => 
  axios.post(`${host}locations`, {...body, language});


export const findFleet = (body) => 
  axios.post(`${host}find_fleet`, body);


export const findCar = (body, language) => 
  axios.post(`${host}find_car`, {...body, language});


export const equipment = (body, language) => 
  axios.post(`${host}sum_equipment`, {...body, language});


export const createReserve = (body, language) => 
  axios.post(`${host}create`,  {...body, language});


export const viewReserve = (body, language) => 
  axios.post(`${host}view`, {...body, language});


export const cancelReserve = (body, language) => 
  axios.post(`${host}cancel`, {...body, language});

export const validateOrganization = (body, language) => 
axios.post(`${host}validate_organization`, {...body, language});


