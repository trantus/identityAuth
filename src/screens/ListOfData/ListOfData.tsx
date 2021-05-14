import React, { Dispatch, useEffect } from 'react'
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'

import { connect } from 'react-redux'
import { Action } from 'redux'
import { getData as getDataAction } from '../../actions/actionCreators/dataActions'
import { DataItem, RootState } from '../../interfaces'
import ListItem from './ListItem'

interface StateProps {
  data: DataItem[]
}

interface DisptachProps {
  getData: () => void
}

type Props = DisptachProps & StateProps

const ListOfData = (props: Props) => {
  const { getData } = props

  const renderItem = ({ item }: { item: DataItem }) => <ListItem item={item} />

  const renderSeparator = () => <View style={{ borderColor: 'green', borderTopWidth: 1 }} />

  const keyExtractor = (item: DataItem, index: number) => item.type + String(index)

  useEffect(() => {
    getData()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={props.data}
        style={{ flex: 1 }}
        contentContainerStyle={styles.containerList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerList: {
    marginHorizontal: 16,
    marginTop: 16,
  },
})

const mapStateToProps = (state: RootState): StateProps => ({
  data: state.listOfData.data,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>): DisptachProps => ({
  getData: () => dispatch(getDataAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListOfData)
