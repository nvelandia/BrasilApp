
export const PLACE_PICKUP = 'PLACE_PICKUP';
export const PLACE_DROPOFF = 'PLACE_DROPOFF';
export const INFO_USER = 'INFO_USER';
export const CLEAR_HOME = 'CLEAR_HOME';

export const place_pickup = (payload) => {
    return {
        type: PLACE_PICKUP,
        payload,
    }
}

export const place_dropoff = (payload) => {
    return {
        type: PLACE_DROPOFF,
        payload,
    }
}

export const info_user = (payload) => {
    return {
        type: INFO_USER,
        payload,
    }
}

export const clear_home = () => {
    return {
        type: CLEAR_HOME
    }
}