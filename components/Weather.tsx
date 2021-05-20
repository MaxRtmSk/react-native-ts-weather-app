import React, { FC } from 'react'
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import { Ionicons } from '@expo/vector-icons';

type ConditionAtmospher = 'Mist' | 'Smoke' | 'Haze' | 'Dust' | 'Fog' | 'Sand' | 'Ash' | 'Squall' | 'Tornado'

export type ConditionCodes = 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | ConditionAtmospher | 'Clear' | 'Clouds'

interface WeatherProps {
  temp: number,
  condition: ConditionCodes
}

const Weather: FC<WeatherProps> = ({ temp, condition }) => {
  return <View style={styles.container}><Ionicons name="snow" size={96} color="white" /><Text>{temp}</Text></View>;
}

export default Weather

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})