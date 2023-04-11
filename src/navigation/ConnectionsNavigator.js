import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Connections, EbecoLogin, EbecoDevices } from '../screens';
import { ROUTES } from '../constants';

const Stack = createNativeStackNavigator();

export default function ConnectionsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.CONNECTIONS} component={Connections} options={{headerShown: true}}/>
      <Stack.Screen name={ROUTES.EBECO} component={EbecoLogin} options={{headerShown: true}}/>
      <Stack.Screen name={ROUTES.EBECO_DEVICES} component={EbecoDevices} options={{headerShown: true}}/>
    </Stack.Navigator>
  );
}