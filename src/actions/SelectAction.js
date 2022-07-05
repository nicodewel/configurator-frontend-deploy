export const SET_ENGINE = "SET_ENGINE"
export const SET_COLOR = "SET_COLOR"
export const SET_INTERIOR = "SET_INTERIOR"
export const SET_WHEEL = "SET_WHEEL"
export const SET_EXTRAS = "SET_EXTRAS"
export const CALCULATE_PRICE = "CALCULATE_PRICE"

export const selectEngine = (option) => (dispatch) => {
    dispatch({
        type: SET_ENGINE,
        payload: option
    })
    dispatch({
        type: CALCULATE_PRICE
    })
}

export const selectColor = (option) => (dispatch) => {
    dispatch({
        type: SET_COLOR,
        payload: option
    })
    dispatch({
        type: CALCULATE_PRICE
    })
}

export const selectInterior = (option) => (dispatch) => {
    dispatch({
        type: SET_INTERIOR,
        payload: option
    })
    dispatch({
        type: CALCULATE_PRICE
    })
}

export const selectExtras = (option) => (dispatch) => {
    dispatch({
        type: SET_EXTRAS,
        payload: option
    })
    dispatch({
        type: CALCULATE_PRICE
    })
}

export const selectWheel = (option) => (dispatch) => {
    dispatch({
        type: SET_WHEEL,
        payload: option
    })
    dispatch({
        type: CALCULATE_PRICE
    })
}

