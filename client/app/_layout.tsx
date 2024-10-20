import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import Splash from './screens/Splash';
import Home from './screens/Home';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.hideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    NotoSans: require('../assets/fonts/noto-sans-regular.ttf'),
  });

  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 3000);
  }, []);

  return !ready ? <Splash /> : <Home />;
}
