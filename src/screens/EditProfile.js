import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class EditProfile extends Component {
  render() {
    return (
      <View>
        <Text> EditProfile Screen </Text>
        <Input type="number-pad" />
        <Input password />
      </View>
    );
  }
}

class Input extends Component {
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
  },
  textInput: {
    flex: 1,
  },
});
