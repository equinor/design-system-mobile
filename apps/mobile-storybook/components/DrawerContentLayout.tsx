import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function DrawerContentLayout(
  props: DrawerContentComponentProps
) {
  const router = useRouter();

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
        {/* Actions */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Actions</Text>
          </View>
          <View style={styles.sectionItems}>
            <DrawerItem
              label="Button"
              onPress={() => router.push("/buttons")}
              activeTintColor="#007079"
            />
          </View>
        </View>

        {/* Data Display */}
        <View style={styles.sectionContainer}>
          <View style={styles.separator}></View>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Data Display</Text>
          </View>
          <View style={styles.sectionItems}>
            <DrawerItem
              label="Cell"
              onPress={() => router.push("/cell")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="Chip"
              onPress={() => router.push("/chips")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="Icon"
              onPress={() => router.push("/icon")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="Label"
              onPress={() => router.push("/label")}
              activeTintColor="#007079"
            />
          </View>
        </View>

        {/* Data Entry */}
        <View style={styles.sectionContainer}>
          <View style={styles.separator}></View>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Data Entry</Text>
          </View>
          <View style={styles.sectionItems}>
            <DrawerItem
              label="Autocomplete"
              onPress={() => router.push("/autocomplete")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="Input"
              onPress={() => router.push("/input")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="Search"
              onPress={() => router.push("/search")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="Select"
              onPress={() => router.push("/select")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="Selection Controls"
              onPress={() => router.push("/selectioncontrols")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="TextField"
              onPress={() => router.push("/textfield")}
              activeTintColor="#007079"
            />
          </View>
        </View>

        {/* Feedback */}
        <View style={styles.sectionContainer}>
          <View style={styles.separator}></View>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Feedback</Text>
          </View>
          <View style={styles.sectionItems}>
            <DrawerItem
              label="Dialog"
              onPress={() => router.push("/dialogs")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="Environment"
              onPress={() => router.push("/environment")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="Offline Banner"
              onPress={() => router.push("/offlinebanner")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="Progress"
              onPress={() => router.push("/progress")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="Progress Indicator"
              onPress={() => router.push("/progressindicator")}
              activeTintColor="#007079"
            />
          </View>
        </View>

        {/* Surfaces */}
        <View style={styles.sectionContainer}>
          <View style={styles.separator}></View>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Surfaces</Text>
          </View>
          <View style={styles.sectionItems}>
            <DrawerItem
              label="Accordion"
              onPress={() => router.push("/accordion")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="Paper"
              onPress={() => router.push("/paper")}
              activeTintColor="#007079"
            />
          </View>
        </View>

        {/* Navigation */}
        <View style={styles.sectionContainer}>
          <View style={styles.separator}></View>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Navigation</Text>
          </View>
          <View style={styles.sectionItems}>
            <DrawerItem
              label="Menu"
              onPress={() => router.push("/menu")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="Tabs"
              onPress={() => router.push("/tabs")}
              activeTintColor="#007079"
            />
          </View>
        </View>

        {/* Utilities */}
        <View style={styles.sectionContainer}>
          <View style={styles.separator}></View>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Utilities</Text>
          </View>
          <View style={styles.sectionItems}>
            <DrawerItem
              label="Popover"
              onPress={() => router.push("/popover")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="Scrim"
              onPress={() => router.push("/scrim")}
              activeTintColor="#007079"
            />
            <DrawerItem
              label="Spacer"
              onPress={() => router.push("/spacer")}
              activeTintColor="#007079"
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
    alignItems: "center",
    backgroundColor: "#B1D6DA",
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#B1D6DA",
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "Equinor-Bold",
    color: "#007079",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    fontFamily: "Equinor-Regular",
    color: "#007079",
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
