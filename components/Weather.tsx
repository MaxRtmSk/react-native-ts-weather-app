import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native';
import { Text } from './Themed';
import { Ionicons, AntDesign, Fontisto, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

type ConditionAtmospher = 'Mist' | 'Smoke' | 'Haze' | 'Dust' | 'Fog' | 'Sand' | 'Ash' | 'Squall' | 'Tornado'

export type ConditionCodes = 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | ConditionAtmospher | 'Clear' | 'Clouds'

interface WeatherProps {
  temp: number,
  condition: ConditionCodes
}

const weatherOptions: any = {
  Thunderstorm: () => <Ionicons name="ios-thunderstorm-sharp" size={96} color="white" />,
  Drizzle: () => <Feather name="cloud-drizzle" size={96} color="black" />,
  Rain: () => <Ionicons name="ios-rainy" size={96} color="white" />,
  Snow: () => <Ionicons name="snow" size={96} color="white" />,
  Mist: () => <MaterialCommunityIcons name="weather-fog" size={96} color="white" />,
  Smoke: () => <MaterialCommunityIcons name="weather-fog" size={96} color="white" />,
  Haze: () => <AntDesign name="warning" size={72} color="yellow" />,
  Fog: () => <Fontisto name="fog" size={72} color="white" />,
  Sand: () => <AntDesign name="warning" size={72} color="yellow" />,
  Ash: () => {
    return (
      <Text>
        <Ionicons name="ios-rainy" size={96} color="white" />
        <AntDesign name="warning" size={72} color="yellow" />
      </Text>
    )
  },
  Squall: () => {
    return (
      <Text>
        <Feather name="wind" size={96} color="white" />
        <AntDesign name="warning" size={72} color="yellow" />
      </Text>
    )
  },
  Tornado: () => {
    return (
      <Text>
        <MaterialCommunityIcons name="weather-tornado" size={96} color="white" />
        <AntDesign name="warning" size={72} color="yellow" />
      </Text>
    )
  },
  Clear: () => <Feather name="sun" size={96} color="white" />,
  Clouds: () => <MaterialCommunityIcons name="weather-cloudy" size={96} color="white" />,
}

const Weather: FC<WeatherProps> = ({ temp, condition }) => {
  return (
    <View>
      <View style={styles.halfContainer}>
        {weatherOptions[condition]()}
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{temp}°</Text>
        <Text style={styles.subtitle}>{temp}°</Text>
      </View>
    </View >
  );
}

export default Weather

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temp: {
    fontSize: 42,
    color: "white",
    marginTop: 30
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start'
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  }
})

{/* <Ionicons name="ios-rainy" size={24} color="black" /> */ }