import MainNavigation from "./src/MainNavigation/MainNavigation";
import * as SplashScreen from "expo-splash-screen";
import React, { useState, useCallback, useEffect } from "react";
import { View } from "react-native";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} className="flex-1 bg-black">
      <GluestackUIProvider config={config.theme}>
        <MainNavigation />
      </GluestackUIProvider>
    </View>
  );
}
