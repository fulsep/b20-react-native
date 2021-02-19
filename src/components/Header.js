import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
  state = {
    headerShown: false,
  };
  render() {
    return (
      <View style={headerStyles.parent}>
        <View style={headerStyles.root}>
          <Text style={headerStyles.title}>Hello World</Text>
          <TouchableOpacity
            onPress={() =>
              this.setState({headerShown: !this.state.headerShown})
            }>
            <Icon name="bars" size={20} color="white" />
          </TouchableOpacity>
        </View>
        {this.state.headerShown && (
          <View style={headerStyles.menu}>
            <Text style={headerStyles.menuText}>
              Lorem ipsum dolor sit amet
            </Text>
            <Text style={headerStyles.menuText}>
              Lorem ipsum dolor sit amet
            </Text>
            <Text style={headerStyles.menuText}>
              Lorem ipsum dolor sit amet
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const headerStyles = StyleSheet.create({
  parent: {
    position: 'relative',
  },
  root: {
    backgroundColor: 'purple',
    height: 45,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    color: 'white',
  },
  menu: {
    backgroundColor: 'purple',
    position: 'absolute',
    bottom: -55,
    width: '100%',
  },
  menuText: {
    color: 'white',
  },
});
