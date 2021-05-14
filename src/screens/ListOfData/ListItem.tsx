import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DataItem } from '../../interfaces'

interface Props {
  item: DataItem
}

const ListItem = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Type: {item.type}</Text>
      <Text style={styles.text}>Value: {item.value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 16,
  },
})

export default ListItem
