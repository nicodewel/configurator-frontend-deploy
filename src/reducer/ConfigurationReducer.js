import { SET_ENGINE, SET_COLOR, SET_EXTRAS, SET_INTERIOR, SET_WHEEL, CALCULATE_PRICE } from "../actions/SelectAction"
import { SAVE_CONFIG, NEW_CONFIG } from "../actions/FetchAction"

const currentState = JSON.parse(localStorage.getItem("currentConfig"));

let initialState = currentState ? currentState : {
    model: "",
    engine: "",
    color: "",
    interior: "",
    wheels: "",
    extra: [],
    price: "",
    id: ""
}

let nextState;

const ConfigurationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ENGINE:
            nextState = { ...state, engine: action.payload }
            localStorage.setItem("currentConfig", JSON.stringify(nextState));
            return nextState;
        case SET_COLOR:
            nextState = { ...state, color: action.payload }
            localStorage.setItem("currentConfig", JSON.stringify(nextState));
            return nextState;
        case SET_EXTRAS:
            if (state.extra.map(extra => extra.id).includes(action.payload.id)) {
                nextState = { ...state, extra: [] };
                state.extra.forEach(extra => {
                    if (extra.id !== action.payload.id) {
                        nextState.extra = [...nextState.extra, extra]
                    }
                })
                localStorage.setItem("currentConfig", JSON.stringify(nextState));
                return nextState;
            }
            else {
                nextState = { ...state, extra: [...state.extra, action.payload] }
                localStorage.setItem("currentConfig", JSON.stringify(nextState));
                return nextState;
            }
        case SET_INTERIOR:
            nextState = { ...state, interior: action.payload };
            localStorage.setItem("currentConfig", JSON.stringify(nextState));
            return nextState;
        case SET_WHEEL:
            nextState = { ...state, wheels: action.payload };
            localStorage.setItem("currentConfig", JSON.stringify(nextState));
            return nextState;
        case SAVE_CONFIG:
            nextState = { ...state, savedConfiguration: action.payload };
            localStorage.setItem("currentConfig", JSON.stringify(nextState));
            return state;
        case NEW_CONFIG:
            let model = action.payload.carConfigAttributes.find(attribute => attribute.type === "model");
            let engine = action.payload.carConfigAttributes.find(attribute => attribute.type === "engine");
            let color = action.payload.carConfigAttributes.find(attribute => attribute.type === "color");
            let interior = action.payload.carConfigAttributes.find(attribute => attribute.type === "interior");
            let wheels = action.payload.carConfigAttributes.find(attribute => attribute.type === "wheel");
            let extra = action.payload.carConfigAttributes.filter(attribute => attribute.type === "extra");
            let id = action.payload.id;
            return {
                model: model ? model : "",
                engine: engine ? engine : "",
                color: color ? color : "",
                interior: interior ? interior : "",
                wheels: wheels ? wheels : "",
                extra: extra ? extra : [],
                price: "",
                id: id ? id : "",
            }
        case CALCULATE_PRICE:
            let newPrice = 0;
            const attributes = [state.model, state.engine, state.color, state.interior, state.wheels]
            state.extra.forEach(extra => extra !== undefined ? extra.priceInCents ? newPrice += extra.priceInCents : 0 : 0)
            attributes.forEach(attribute => attribute !== undefined ? attribute.priceInCents ? newPrice += attribute.priceInCents : 0 : 0)
            let formattedPrice = `${newPrice}`.slice(-1) === "0" ? `${newPrice / 100}0€` : `${newPrice / 100}€`
            nextState = { ...state, price: formattedPrice };
            localStorage.setItem("currentConfig", JSON.stringify(nextState));
            return nextState;
        default:
            return state;
    }
}
export default ConfigurationReducer;