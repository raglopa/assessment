import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import LabelListItem from './LabelListItem'

export default class LabelList extends Component {
  render() {
    const { labels } = this.props
    return (
      <View style={styles.labelRow}>
        {labels.map(label => <LabelListItem label={label} key={label.id} />)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  labelRow: {
    flex: 1,
    flexDirection: 'row'
  }
})
