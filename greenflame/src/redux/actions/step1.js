
export const CAR_SELECTED = 'CAR_SELECTED';
export const RATES_SELECTED = 'RATES_SELECTED';
export const CLEAR_STEP1 = 'CLEAR_STEP1';

export const carSelected = (payload) => {
    return {
        type: CAR_SELECTED,
        payload,
    }
}

export const ratesSelected = (payload) => {
    return {
        type: RATES_SELECTED,
        payload,
    }
}

export const clearStep1 = () => {
    return {
        type: CLEAR_STEP1
    }
}