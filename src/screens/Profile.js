import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('EditProfile')}>
          <Text> Profile Screen </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
