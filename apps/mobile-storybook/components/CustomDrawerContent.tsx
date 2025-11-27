import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>EDS Mobile</Text>
        <Text style={styles.headerSubtitle}>Component Library</Text>
      </View>

      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContent}
      >
        {/* SECTION 1: Data Display */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Data Display</Text>
          </View>
          <View style={styles.sectionItems}>
            <DrawerItem
              label="Button"
              //use router.push for navigation
              onPress={() => router.push("/buttons")}
              activeTintColor="#2196f3"
            />
            <DrawerItem
              label="Chips"
              onPress={() => router.push("/chips")}
              activeTintColor="#2196f3"
            />
          </View>
        </View>
        {/* SECTION 2: Feedback */}
        <View style={styles.sectionContainer}>
          <View style={styles.separator}></View>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Feedback</Text>
          </View>
          <View style={styles.sectionItems}>
            <DrawerItem
              label="Dialogs"
              onPress={() => router.push("/dialogs")}
              activeTintColor="#2196f3"
            />
            <DrawerItem
              label="Explore"
              onPress={() => router.push("/explore")}
              activeTintColor="#2196f3"
            />
            <DrawerItem
              label="Home"
              onPress={() => router.push("/(tabs)")}
              activeTintColor="#2196f3"
            />
          </View>
        </View>
      </DrawerContentScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
          <Text style={styles.footerText}>Version 0.1.0</Text>
          <Text style={styles.footerCopyright}>© 2025 Equinor ASA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#007AFF",
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#0066CC",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#E6F2FF",
  },
  scrollContent: {
    paddingTop: 8,
  },
  sectionContainer: {
    marginVertical: 16,
  },
  sectionHeaderContainer: {
    padding: 10,
    marginBottom: 8,
  },
  separator: {
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    marginVertical: 12,
    marginHorizontal: 16,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#555",
    textTransform: "uppercase",
  },
  sectionItems: {
    paddingLeft: 12,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  footerCopyright: {
    fontSize: 10,
    color: "#999",
  },
});
