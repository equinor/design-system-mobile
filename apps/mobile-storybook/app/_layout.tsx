import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { EDSProvider, useEDS } from "@equinor/design-system-mobile-components";

export default function RootLayout() {
  const [loaded, edsLoadError] = useEDS();

  if (!loaded) {
    return null;
  }

  return (
    <EDSProvider density="phone" colorScheme="light">
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </EDSProvider>
  );
}
