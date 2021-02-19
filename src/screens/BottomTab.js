import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Package from './Package';
import History from './History';
import Home from './Home';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export default class BottomTabs extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          component={Home}
          name="Home"
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          component={Package}
          name="Package"
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="cube" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          component={History}
          name="History"
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="database" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          component={ProfileStack}
          name="ProfileStack"
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
