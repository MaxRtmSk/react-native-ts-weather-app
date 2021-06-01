export interface IState {
  nowWeather: null;
  weeklyWeather: null;
  loading: boolean;
  errorMessage: null;
}

export enum WeatherActionTypes {
  GET_WEATHER,
  GET_WEATHER_FULFILLED,
  GET_WEATHER_REJECTED
}

export interface GetWeatherActions {
  type: WeatherActionTypes.GET_WEATHER;
  loading: boolean;
}

export interface GetWeatherFulfilled {
  type: WeatherActionTypes.GET_WEATHER_FULFILLED;
  payload: null;
  loading: boolean;
}

export interface GetWetherRejected {
  type: WeatherActionTypes.GET_WEATHER_REJECTED;
  payload: null;
  loading: boolean;
}

export type WeatherAction = GetWeatherActions | GetWeatherFulfilled | GetWetherRejected;