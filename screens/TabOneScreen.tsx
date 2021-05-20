import * as React from 'react';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import axios from 'axios';

const API_KEY = '715a211aefa62396dd1e1f8f79de590e'

export default function TabOneScreen() {

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getWeather = async (latitude: number, longitude: number) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    console.log(data)
  }

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync()
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()
      getWeather(latitude, longitude)
      setIsLoading(false)
    } catch (error) {
      Alert.alert('Не могу определить местоположение', 'Текст ошибки')
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      {isLoading ? <Text>Loading1</Text> : null}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
