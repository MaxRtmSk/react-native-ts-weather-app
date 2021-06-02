import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { Text, View } from '../components/Themed';
import axios from 'axios';
import Weather from '../components/Weather';
import { LinearGradient } from 'expo-linear-gradient';
import ListForWeek from '../components/ListForWeek/ListForWeek';
import { useTypedSeletor } from '../hooks/useTypedSelector';
import { getWeather } from '../store/actions';
// Types 




export default function TabOneScreen() {
  // const [temp, setTemp] = useState<number>(0)
  // const [condition, setCondition] = useState<ConditionCodes>('Sand')
  // const [isLoading, setIsLoading] = useState<boolean>(true)
  const { loading, nowWeather } = useTypedSeletor(state => state)
  const dispatch = useDispatch()

  // const getWeather = async (latitude: number, longitude: number) => {
  //   const { data: { main: { temp }, weather } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
  //   setTemp(temp)
  //   setCondition(weather[0].main)
  //   setIsLoading(false)
  // }

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync()
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()
      // getWeather(latitude, longitude)
      dispatch(getWeather(latitude, longitude))
    } catch (error) {
      Alert.alert('Не могу определить местоположение', 'Текст ошибки')
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  if (loading) return <Text>Loading</Text>

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      {/* {isLoading ? <Text>Loading</Text> : <Weather temp={Math.round(temp)} condition={condition} />} */}
      <Weather temp={Math.round(nowWeather.temp)} condition={nowWeather.condition} />
      <ListForWeek />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
