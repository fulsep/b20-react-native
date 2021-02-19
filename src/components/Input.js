import React, {Component} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Input extends Component {
  state = {
    passwordInput: true,
  };
  componentDidMount() {
    this.checkType();
  }
  checkType = () => {
    if (this.props.password !== undefined) {
      this.setState({passwordInput: true});
    } else {
      this.setState({passwordInput: false});
    }
  };
  render() {
    return (
      <View style={inputStyles.parent}>
        <TextInput
          style={inputStyles.textInput}
          secureTextEntry={this.state.passwordInput}
          keyboardType={this.props.type}
          onChangeText={this.props.onChange}
        />
        <TouchableOpacity
          onPress={() =>
            this.setState({passwordInput: !this.state.passwordInput})
          }>
          {this.props.password && <Icon name="eye" size={25} />}
        </TouchableOpacity>
      </View>
    );
  }
}

const inputStyles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
  },
});
