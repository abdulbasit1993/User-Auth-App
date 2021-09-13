import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthNavigator from './navigation/AuthNavigator';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{header: () => null}}>
    //     <Stack.Screen name="SignIn" component={SignInScreen} />
    //     <Stack.Screen name="SignUp" component={SignUpScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <AuthNavigator />
  );
};

const styles = StyleSheet.create({});

export default App;
