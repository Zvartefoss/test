import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { COLORS, ROUTES } from '../constants';
import { Home, Devices, Statistics } from '../screens';
import { useNavigation } from '@react-navigation/native';
import ConnectionsNavigator from './ConnectionsNavigator';
import SettingsNavigator from './SettingsNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: COLORS.RussianViolet,
        tabBarInactiveTintColor: COLORS.TaupeGray,
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { padding: 10, height: 70, borderTopLeftRadius: 25, borderTopRightRadius: 25, backgroundColor: COLORS.Champagne, overflow: 'hidden', position: 'absolute' },
        tabBarIcon: ({ focused, color, size}) => {
          let icon;

          if (route.name === ROUTES.HOME_TAB) icon = require('../assets/icons/home.png')
          else if (route.name === ROUTES.DEVICES_TAB) icon = require('../assets/icons/devices.png')
          else if (route.name === ROUTES.STATISTICS_TAB) icon = require('../assets/icons/statistics.png')
          else if (route.name === ROUTES.CONNECTIONS_TAB) icon = require('../assets/icons/connections.png')
          else if (route.name === ROUTES.SETTINGS_TAB) icon = require('../assets/icons/settings.png')
          
          return <Image source={icon} style={{width: 30, height: 30}}/>
        },
      })}
    >
      <Tab.Screen name={ROUTES.HOME_TAB} options={{title: "Heim", headerShown: false}} component={Home} />
      <Tab.Screen name={ROUTES.DEVICES_TAB} options={{title: "Enheter", headerShown: false}} component={Devices} />
      <Tab.Screen name={ROUTES.STATISTICS_TAB} options={{title: "Statistikk", headerShown: false}} component={Statistics} />
      <Tab.Screen name={ROUTES.CONNECTIONS_TAB} options={{title: "Tilkoblinger", headerShown: false}} component={ConnectionsNavigator} />
      <Tab.Screen name={ROUTES.SETTINGS_TAB} options={{title: "Instillinger", headerShown: false}} component={SettingsNavigator} />
      
    </Tab.Navigator>
  )
}