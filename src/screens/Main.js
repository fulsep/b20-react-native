import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import Header from '../components/Header';
import Login from './Login';
import BottomTabs from './BottomTab';
import Balance from './Balance';

const Stack = createStackNavigator();

class Main extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{header: () => <Header />}}>
        {this.props.auth.token === null && (
          <React.Fragment>
            <Stack.Screen component={Login} name="Login" />
          </React.Fragment>
        )}
        {this.props.auth.token !== null && (
          <React.Fragment>
            <Stack.Screen component={BottomTabs} name="BottomTabs" />
            <Stack.Screen
              // options={{
              //   headerShown: false,
              // }}
              component={Balance}
              name="Balance"
            />
          </React.Fragment>
        )}
      </Stack.Navigator>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
