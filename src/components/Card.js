import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <View style={[styles.card, {...this.props.style}]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    elevation: 3,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    justifyContent: 'space-between',
  },
});
