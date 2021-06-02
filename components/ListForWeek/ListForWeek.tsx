import React from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
//Components
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../ListItem/ListItem'
import { useTypedSeletor } from '../../hooks/useTypedSelector';
// Styles
import GlobalStyles from '../../styles/GlobalStyles';
import { Text } from '../Themed';


const renderItem = ({ item }: any) => {
  console.log(item.dt)
  return (
    <ListItem temp={Math.round(item.temp.day)} date={item.dt} />
  )
};


const ListForWeek = () => {
  const { weekWeather } = useTypedSeletor(state => state)


  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}><Text style={styles.title}>Погода на неделю</Text></View>
      <FlatList style={{ width: '100%' }} data={weekWeather} renderItem={renderItem} keyExtractor={(item) => uuidv4()} />
    </View>
  )
}


export default ListForWeek

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#4b86b4',
    borderRadius: 20,
  },
  titleWrapper: {

  },
  title: {
    fontFamily: 'Arial',
    fontWeight: '600',
    fontSize: 20,
    paddingVertical: 10,
  }
});