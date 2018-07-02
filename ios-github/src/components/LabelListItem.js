import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'native-base'

export default class LabelList extends Component {
  render() {
    const { label } = this.props
    return (
      <View style={[styles.label, { backgroundColor: `#${label.color}` }]}>
        <Text style={styles.labelName}>{label.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    borderRadius: 20,
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    margin: 4
  },
  labelName: {
    color: '#fff'
  }
})
