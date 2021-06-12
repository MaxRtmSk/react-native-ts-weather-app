type ConditionAtmospher = 'Mist' | 'Smoke' | 'Haze' | 'Dust' | 'Fog' | 'Sand' | 'Ash' | 'Squall' | 'Tornado'

export type ConditionCodes = 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | ConditionAtmospher | 'Clear' | 'Clouds'

export interface INowWeather {
  condition: ConditionCodes
  temp: number
}
export interface IState {
  nowWeather: INowWeather;
  weekWeather: any;
  loading: boolean;
  errorMessage: string;
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
  nowWeather: INowWeather;
  weekWeather: any;
  loading: boolean;
}

export interface GetWetherRejected {
  type: WeatherActionTypes.GET_WEATHER_REJECTED;
  payload: string;
  loading: boolean;
}

export type WeatherAction = GetWeatherActions | GetWeatherFulfilled | GetWetherRejected;


