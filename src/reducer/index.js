import { combineReducers } from "redux"
import ConfigAttributeReducer from "./ConfigAttributeReducer"
import ConfigurationReducer from "./ConfigurationReducer"

export const rootreducer = combineReducers({
    config: ConfigurationReducer,
    attributes: ConfigAttributeReducer
})