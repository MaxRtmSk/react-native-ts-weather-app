import axios from 'axios';
//Types
import {GetWeatherActions, GetWeatherFulfilled, GetWetherRejected, WeatherActionTypes, INowWeather}from '../types/types'
import {AppDispatch} from './store'

const API_KEY = '715a211aefa62396dd1e1f8f79de590e'

export const fetchData = (bool: boolean):GetWeatherActions => {

  return {
      type: WeatherActionTypes.GET_WEATHER,
      loading: bool,
  };
}

export const fetchDataFulfilled = (nowWeather: INowWeather, weekWeather: any):GetWeatherFulfilled => {
  return {
      type: WeatherActionTypes.GET_WEATHER_FULFILLED,
      nowWeather: nowWeather,
      weekWeather: weekWeather,
      loading: false,
  };
}

export const fetchDataRejected = (error: string):GetWetherRejected => {

  return {
      type: WeatherActionTypes.GET_WEATHER_REJECTED,
      payload: error,
      loading: true,
  };
}


export const getWeather = (latitude: number, longitude: number) => {
  return async(dispatch:AppDispatch) => {
    axios.all([ 
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`),
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={current,minutely,hourly,alerts}&appid=${API_KEY}&units=metric`)
    ])
    .then(axios.spread((nowWeatherData, weekWeatherData) => {
      // console.log(nowWeather)
      const {main: { temp }, weather } = nowWeatherData.data
      const nowWeather:INowWeather = {
              condition: weather[0].main,
              temp: temp
      } 
      
      // console.log('data',weekWeatherData)

      dispatch(fetchDataFulfilled(nowWeather, weekWeatherData.data.daily))
    }))
  }
}