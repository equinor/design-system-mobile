import { SettingsControls } from "@/components/SettingsControls";
import { Stack } from "expo-router";

export default function ComponentsLayout() {
    return (
        <Stack
            screenOptions={{
                headerTransparent: true,
                headerBlurEffect: "none",
                headerLargeTitle: true,
                headerLargeTitleShadowVisible: true,
                headerLargeTitleStyle: { fontFamily: "Equinor-Bold" },
                headerTitleStyle: {
                    fontFamily: "Equinor-Bold",
                },
                headerRight: () => <SettingsControls />,
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: "Components",
                }}
            />
            <Stack.Screen name="badge" options={{ title: "Badge" }} />
            <Stack.Screen name="button" options={{ title: "Button" }} />
            <Stack.Screen name="input" options={{ title: "Input" }} />
            <Stack.Screen name="link" options={{ title: "Link" }} />
            <Stack.Screen
                name="selectioncontrols"
                options={{ title: "Selection Controls" }}
            />
            <Stack.Screen
                name="typography"
                options={{ title: "Typography" }}
            />
            <Stack.Screen
                name="textfield"
                options={{ title: "TextField" }}
            />
            <Stack.Screen name="search" options={{ title: "Search" }} />
        </Stack>
    );
}
