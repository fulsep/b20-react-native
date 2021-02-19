import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {connect} from 'react-redux';

import Input from '../components/Input';
import Button from '../components/Button';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  doLogin = () => {
    const {email, password} = this.state;
    if (email === 'admin@mail.com' && password === '1234') {
      this.props.dispatch({type: 'LOGIN'});
    } else {
      Alert.alert('Wrong username or password');
    }
  };
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.input}>
          <Text>Email</Text>
          <Input
            onChange={(email) => this.setState({email})}
            type="email-address"
          />
        </View>
        <View style={styles.input}>
          <Text>Password</Text>
          <Input onChange={(password) => this.setState({password})} password />
        </View>
        <View>
          <Button onPress={this.doLogin} icon="user">
            Login
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Login);
