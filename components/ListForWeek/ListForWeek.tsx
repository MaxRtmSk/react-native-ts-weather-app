import React from 'react';
//Components
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../ListItem/ListItem'
// Styles
import GlobalStyles from '../../styles/GlobalStyles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const ListForWeek = () => {

  const renderItem = ({ item }: any) => (
    <ListItem title={item.title} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  )
}


export default ListForWeek

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  row: {

  }
});