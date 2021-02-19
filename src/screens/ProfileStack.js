import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import Profile from './Profile';
import EditProfile from './EditProfile';

export default class ProfileStack extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    );
  }
}
