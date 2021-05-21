import * as React from 'react';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import axios from 'axios';
import Weather, { ConditionCodes } from '../components/Weather';
import { LinearGradient } from 'expo-linear-gradient';

const API_KEY = '715a211aefa62396dd1e1f8f79de590e'

export default function TabOneScreen() {
  const [temp, setTemp] = useState<number>(0)
  const [condition, setCondition] = useState<ConditionCodes>('Sand')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getWeather = async (latitude: number, longitude: number) => {
    const { data: { main: { temp }, weather } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    setTemp(temp)
    setCondition(weather[0].main)
    setIsLoading(false)
  }

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync()
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()
      getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert('Не могу определить местоположение', 'Текст ошибки')
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      {isLoading ? <Text>Loading</Text> : <Weather temp={Math.round(temp)} condition={condition} />}
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
