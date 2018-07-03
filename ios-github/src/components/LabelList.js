import React from 'react'
import { View, StyleSheet } from 'react-native'

import LabelListItem from './LabelListItem'
import PropTypes from 'prop-types'

const LabelList = ({ labels }) => (
  <View style={styles.labelRow}>
    {labels.map(label => <LabelListItem label={label} key={label.id} />)}
  </View>
)

const styles = StyleSheet.create({
  labelRow: {
    flex: 1,
    flexDirection: 'row'
  }
})

LabelList.propTypes = {
  labels: PropTypes.array.isRequired
}
export default LabelList
