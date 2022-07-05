import { getConfigurationAsList } from "../util/util";
import { CALCULATE_PRICE } from "./SelectAction";

export const SAVE_CONFIG = "SAVE_CONFIG";
export const GET_ATTRIBUTES = "GET_ATTRIBUTES"
export const NEW_CONFIG = "NEW_CONFIG"

const BASE_URL = process.env.REACT_APP_BACKEND_URL;


export const getNewConfig = (configId) => async (dispatch) => {
  try {

    const response = await fetch(`${BASE_URL}configuration/${configId}`);
    if (await !response.ok) {
      return false;
    }
    const payload = await response.json();
    dispatch({
      type: NEW_CONFIG,
      payload: payload
    })
    dispatch({
      type: CALCULATE_PRICE,
    })
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
}

export const postConfiguration = (configuration) => async (dispatch) => {
  let postObject;
  let config = getConfigurationAsList(configuration);
  config = { id: configuration.id, carConfigAttributes: config.slice(0, config.length - 2) };
  console.log("POSTCONFIG:", config);

  try {
    const response = await fetch(
      BASE_URL + "configuration",
      {
        method: "POST",
        body: JSON.stringify(config),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
    );
    postObject = await response.json();
    dispatch({
      type: SAVE_CONFIG,
      payload: postObject
    });
  } catch (error) {
    console.log(error);
  }
  return postObject;
}

export const getAllAttributes = () => async (dispatch) => {
  try {
    const response = await fetch(BASE_URL + "attributes");
    const payload = await response.json();
    dispatch({
      type: GET_ATTRIBUTES,
      payload: payload
    });
  } catch (error) {
    console.log(error);
  }
}

export const getAllConfigIds = async () => {
  const response = await fetch(BASE_URL + "configurations/id");
  const ids = await response.json();
  return ids;

}