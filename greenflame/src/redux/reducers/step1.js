import { 
    CAR_SELECTED,
    RATES_SELECTED,
    CLEAR_STEP1
} from '../actions/step1';

const initialState = {
    carSelected: '',
    ratesSelected: ''
}

const step1 = (state = initialState, action) => {
    switch(action.type){
        case CAR_SELECTED:
            return {
                ...state,
                carSelected: action.payload
            }    
        case RATES_SELECTED:
            return {
                ...state,
                ratesSelected: action.payload
            }       
        case CLEAR_STEP1:
            return {
                carSelected: '',
                ratesSelected: ''
            }       
        default: {
            return state;
        }
    }    
}

export default step1;