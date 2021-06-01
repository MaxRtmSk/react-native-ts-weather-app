import { useDispatch } from 'react-redux';
import superagent from 'superagent';
import {GetWeatherActions, GetWeatherFulfilled, GetWetherRejected, WeatherActionTypes} from '../types/types'

const dispatch = useDispatch()

export const fetchData = (bool: boolean):GetWeatherActions => {

  return {
      type: WeatherActionTypes.GET_WEATHER,
      loading: bool,
  };
}

export const fetchDataFulfilled = (data):GetWeatherFulfilled => {
  return {
      type: WeatherActionTypes.GET_WEATHER_FULFILLED,
      payload: data,
      loading: false,
  };
}

export const fetchDataRejected = (error):GetWetherRejected => {

  return {
      type: WeatherActionTypes.GET_WEATHER_REJECTED,
      payload: error,
      loading: true,
  };
}


export const getWeather = () => {
  return (dispatch) => {

    dispatch(fetchData(true));

    superagent.get('https://swapi.co/api/people')
    .end((err, res) => {
        if(err) dispatch(fetchDataRejected(err));
        dispatch(fetchDataFulfilled(res.body.results));
    })
  }
}