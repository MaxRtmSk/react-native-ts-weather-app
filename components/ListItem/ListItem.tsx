import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  title: string
}

const ListItem: React.FC<Props> = ({ title }) => <View><Text>{title}</Text></View>


export default ListItem