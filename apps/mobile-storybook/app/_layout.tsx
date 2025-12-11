import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import "react-native-reanimated";

import DrawerContentLayout from "@/components/DrawerContentLayout";
import { EDSProvider, useEDS } from "@equinor/design-system-mobile-components";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

function AppContent() {
  const [loaded] = useEDS();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Wait for fonts to load
        if (loaded) {
          // Add a delay to ensure fonts are registered in React Native
          await new Promise((resolve) => setTimeout(resolve, 500));
          setIsReady(true);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen
        if (loaded) {
          await SplashScreen.hideAsync();
        }
      }
    }

    prepare();
  }, [loaded]);

  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <>
      <Drawer
        drawerContent={(props) => <DrawerContentLayout {...props} />}
        screenOptions={{
          headerTintColor: "#007079",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{ drawerLabel: "Home", title: "Home" }}
        />
        <Drawer.Screen name="accordion" options={{ title: "Accordion" }} />
        <Drawer.Screen
          name="autocomplete"
          options={{ title: "Autocomplete" }}
        />
        <Drawer.Screen name="buttons" options={{ title: "Buttons" }} />
        <Drawer.Screen name="cell" options={{ title: "Cell" }} />
        <Drawer.Screen
          name="cell-detail"
          options={{ title: "Detail", drawerItemStyle: { display: "none" } }}
        />
        <Drawer.Screen name="chips" options={{ title: "Chips" }} />
        <Drawer.Screen name="dialogs" options={{ title: "Dialog" }} />
        <Drawer.Screen name="environment" options={{ title: "Environment" }} />
        <Drawer.Screen name="icon" options={{ title: "Icon" }} />
        <Drawer.Screen name="input" options={{ title: "Input" }} />
        <Drawer.Screen name="label" options={{ title: "Label" }} />
        <Drawer.Screen name="menu" options={{ title: "Menu" }} />
        <Drawer.Screen
          name="offlinebanner"
          options={{ title: "Offline Banner" }}
        />
        <Drawer.Screen name="paper" options={{ title: "Paper" }} />
        <Drawer.Screen name="popover" options={{ title: "Popover" }} />
        <Drawer.Screen name="progress" options={{ title: "Progress" }} />
        <Drawer.Screen
          name="progressindicator"
          options={{ title: "Progress Indicator" }}
        />
        <Drawer.Screen name="scrim" options={{ title: "Scrim" }} />
        <Drawer.Screen name="search" options={{ title: "Search" }} />
        <Drawer.Screen name="select" options={{ title: "Select" }} />
        <Drawer.Screen
          name="selectioncontrols"
          options={{ title: "Selection Controls" }}
        />
        <Drawer.Screen name="spacer" options={{ title: "Spacer" }} />
        <Drawer.Screen name="tabs" options={{ title: "Tabs" }} />
        <Drawer.Screen name="textfield" options={{ title: "TextField" }} />
        <Drawer.Screen
          name="+not-found"
          options={{ drawerItemStyle: { display: "none" } }}
        />
      </Drawer>
      <StatusBar style="auto" />
    </>
  );
}

export default function RootLayout() {
  return (
    <EDSProvider density="phone" colorScheme="light">
      <AppContent />
    </EDSProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
