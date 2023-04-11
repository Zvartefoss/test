import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, ForgotPassword, Register, Home, AuthIndex } from '../screens';
import { ROUTES } from '../constants';
import BottomTabNavigator from './BottomTabNavigator';


const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.AUTH_INDEX} component={AuthIndex} options={{headerShown: false}}/>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} options={{headerShown: true}}/>
      <Stack.Screen name={ROUTES.REGISTER} component={Register} options={{headerShown: true}}/>
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} options={{headerShown: true}}/>
      <Stack.Screen name={ROUTES.HOME} component={BottomTabNavigator} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}