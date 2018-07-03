import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'native-base'
import PropTypes from 'prop-types'

const LabelListItem = ({ label }) => {
  const color = `#${label.color ? label.color : '000'}`
  return (
    <View style={[styles.label, { backgroundColor: color }]}>
      <Text style={styles.labelName}>{label.name}</Text>
    </View>
  )
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

LabelListItem.propTypes = {
  label: PropTypes.object.isRequired
}

export default LabelListItem
