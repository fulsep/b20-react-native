import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableNativeFeedback,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Balance extends Component {
  render() {
    return (
      <View>
        <Text> Balance Screen </Text>
        <Button icon="home" onPress={() => Alert.alert('Loging...')}>
          <Text>Login</Text>
        </Button>
      </View>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <View style={{borderRadius: 25}}>
        <Pressable
          android_ripple={{color: 'rgba(0,0,0,0.1)', radius: 180}}
          style={buttonStyles.parent}
          onPress={this.props.onPress}>
          <View style={buttonStyles.background}>
            <View style={buttonStyles.content}>
              <Text style={buttonStyles.text}>{this.props.children}</Text>
            </View>
            <View style={buttonStyles.icon}>
              <Icon name={this.props.icon} size={30} color="white" />
            </View>
          </View>
        </Pressable>
      </View>
    );
  }
}

const buttonStyles = StyleSheet.create({
  parent: {
    // position: 'relative',
    height: 40,
    // backgroundColor: '#eb4c34',
    backgroundColor: '#bf3f2c',
    borderRadius: 25,
  },
  // background: {
  //   backgroundColor: 'red',
  // },
  content: {
    marginLeft: 5,
    // backgroundColor: '#bf3f2c',
    backgroundColor: 'rgba(235, 76, 52, 0.5)',
    borderRadius: 25,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    top: 0,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#eb4c34',
    backgroundColor: '#bf3f2c',
    borderRadius: 25,
    borderColor: '#eb4c34',
    borderWidth: 3,
  },
  text: {
    color: 'white',
    marginLeft: 50,
  },
});
