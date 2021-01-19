
import axios from 'axios';

const host = "https://central.livesupport.digital/api/";
const headers = { "Content-Type": "application/json" };

//Requests

export const findLocation = (body, language) => 
  axios.post(`${host}find_location`, {query: body, language});


export const findFleet = (body, language) => 
  axios.post(`${host}find_fleet`, {query: body, language});


export const findCar = (body, language) => 
  axios.post(`${host}find_car`, {query: body, language});


export const equipment = (body, language) => 
  axios.post(`${host}sum_equipment`, {query: body, language});


export const createReserve = (body, language) => 
  axios.post(`${host}create`,  {query: body, language});


export const viewReserve = (body, language) => 
  axios.post(`${host}view`, {query: body, language});


export const cancelReserve = (body, language) => 
  axios.post(`${host}cancel`, {query: body, language});




//prueba

export const autoComplete = (body, language) => 
axios.post('https://backoffice.autorenta.com/api/locations/find', 
  {query: body, language});



