import { SALUDAR } from '../actions/home';

const initialState = {
    salud: 'Funciona',
    estado: 'false',
    funciona: 'No'
}

const home = (state = initialState, action) => {
    switch(action.type){
        case SALUDAR:
            return {
                ...state,
                estado: 'true',
                funciona: 'Re funciona'
            }    
        
        default: {

            return state;

        }
    }    
}


export default home;