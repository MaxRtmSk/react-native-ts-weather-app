import {WeatherActionTypes, IState, WeatherAction} from '../types/types'

const initialState: IState = {
  nowWeather: null,
  weeklyWeather: null,
  loading: true,
  errorMessage: null
}

const reducer = (state =  initialState, action: WeatherAction): IState => {
  switch(action.type) {
    case WeatherActionTypes.GET_WEATHER: 
    return {...state, loading: action.payload};
    case WeatherActionTypes.GET_WEATHER_FULFILLED:
    return {...state, nowWeather: action.payload, loading: action.loading};
    case WeatherActionTypes.GET_WEATHER_REJECTED:
    return {...state, errorMessage: action.payload, loading: action.loading};
    default: 
    return state;
  }}

export default reducer 

