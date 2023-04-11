import * as React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import RequestHandler from './src/net/request/request-handler';
import * as Storage from './src/services/storage';

import AuthNavigator from './src/navigation/AuthNavigator';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

import WS from './src/net/websocket/websocket';
import CONFIG from './src/constants/config';
import EventHandler from './src/net/event/event-handler';

export default function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [token, setToken] = React.useState(null);

  const getToken = async () => {
    try {
      const remove = await Storage.removeToken();
      const res = await Storage.retrieveToken();
      console.log("stored token: ", res);
      setToken(res);
    } finally {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    WS.init(`ws://${CONFIG.server_url}:${CONFIG.server_port}/api/websocket`, 3000);
    RequestHandler.init(3000);
    EventHandler.init();
    getToken();
  }, []);

  // Conditions that may return early must be below all hooks(!)
  if(!loadFonts()) return null;

  if (isLoading) {
    return <SplashScreen />;
  }
  
  return(
      <NavigationContainer>

        { token == null 
        ? <AuthNavigator />
        : <BottomTabNavigator />}
        
      </NavigationContainer>
  )
}

function SplashScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Getting token...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

function loadFonts(){
  const [fontsLoaded] = useFonts({
      'Quicksand-Light': require('./src/assets/fonts/Quicksand-Light.ttf'),
      'Quicksand-Regular': require('./src/assets/fonts/Quicksand-Regular.ttf'),
      'Quicksand-Medium': require('./src/assets/fonts/Quicksand-Medium.ttf'),
      'Quicksand-SemiBold': require('./src/assets/fonts/Quicksand-SemiBold.ttf'),
      'Quicksand-Bold': require('./src/assets/fonts/Quicksand-Bold.ttf'),
  });
  
  return fontsLoaded;
}