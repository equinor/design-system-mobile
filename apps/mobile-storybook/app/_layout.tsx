import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import "react-native-reanimated";

import CustomDrawerContent from "@/components/CustomDrawerContent";
import { EDSProvider, useEDS } from "@equinor/design-system-mobile-components";

export default function RootLayout() {
  const [loaded, edsLoadError] = useEDS();

  if (!loaded) {
    return null;
  }

  return (
    <EDSProvider density="phone" colorScheme="light">
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="(tabs)"
          options={{ drawerLabel: "Home", drawerHideStatusBarOnOpen: true }}
        />
        <Drawer.Screen name="buttons" options={{ title: "Buttons" }} />
        <Drawer.Screen name="chips" options={{ title: "Chips" }} />
        <Drawer.Screen name="dialogs" options={{ title: "Dialogs" }} />
        <Drawer.Screen name="explore" />
        <Drawer.Screen name="+not-found" />
      </Drawer>
      <StatusBar style="auto" />
    </EDSProvider>
  );
}
