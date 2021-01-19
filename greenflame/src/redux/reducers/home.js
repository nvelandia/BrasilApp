import { 
    PLACE_PICKUP, 
    PLACE_DROPOFF,
    INFO_USER,
    CLEAR_HOME
} from '../actions/home';

const initialState = {
    place_pickup: '',
    place_dropoff: '',
    info_user: '',
}

const home = (state = initialState, action) => {
    switch(action.type){
        case PLACE_PICKUP:
            return {
                ...state,
                place_pickup: action.payload
            }    
        case PLACE_DROPOFF:
            return {
                ...state,
                place_dropoff: action.payload
            }       
        case INFO_USER:
            return {
                ...state,
                info_user: action.payload
            }       
        case CLEAR_HOME:
            return {
                place_pickup: '',
                place_dropoff: '',
                info_user: '',
            }       
        default: {
            return state;
        }
    }    
}

export default home;