import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './src/screens/Home';
import Balance from './src/screens/Balance';
import Package from './src/screens/Package';
import History from './src/screens/History';
import Profile from './src/screens/Profile';
import EditProfile from './src/screens/EditProfile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class BottomTabs extends Component {
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

class ProfileStack extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={BottomTabs}
            options={{
              header: () => <Header />,
            }}
            name="BottomTabs"
          />
          <Stack.Screen
            // options={{
            //   headerShown: false,
            // }}
            component={Balance}
            name="Balance"
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

class Header extends Component {
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
