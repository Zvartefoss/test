import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Account, EnergyZone, Settings } from '../screens';
import { ROUTES } from '../constants';

const Stack = createNativeStackNavigator();

export default function SettingsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.SETTINGS} component={Settings} options={{headerShown: true}}/>
      <Stack.Screen name={ROUTES.ACCOUNT} component={Account} options={{headerShown: true}}/>
      <Stack.Screen name={ROUTES.ENERGY_ZONE} component={EnergyZone} options={{headerShown: true}}/>
    </Stack.Navigator>
  );
}