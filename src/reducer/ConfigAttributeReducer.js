import { GET_ATTRIBUTES } from "../actions/FetchAction";

const allAttributesFromCache = JSON.parse(localStorage.getItem("allAttributes"));

let initialState = allAttributesFromCache ? allAttributesFromCache : {
    models: [],
    engines: [],
    colors: [],
    extras: [],
    interior: [],
    wheels: [],
};

const ConfigAttributeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ATTRIBUTES:

            let allAttributes = {
                ...state,
                models: action.payload.filter(attribute => attribute.type === "model"),
                engines: action.payload.filter(attribute => attribute.type === "engine"),
                colors: action.payload.filter(attribute => attribute.type === "color"),
                extras: action.payload.filter(attribute => attribute.type === "extra"),
                interior: action.payload.filter(attribute => attribute.type === "interior"),
                wheels: action.payload.filter(attribute => attribute.type === "wheel"),
            };
            localStorage.setItem("allAttributes", JSON.stringify(allAttributes));
            return allAttributes;
        default:
            return state;
    }



}

export default ConfigAttributeReducer;