import React, { FC } from 'react'
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

interface WeatherProps {
  temp: number,
}

const Weather: FC<WeatherProps> = ({ temp }) => {
  return <View style={styles.container}><Text>{temp}</Text></View>;
}

export default Weather

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})