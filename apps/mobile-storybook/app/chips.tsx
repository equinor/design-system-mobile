import { Chip } from "@equinor/design-system-mobile-components";
import { ScrollView, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function ChipsScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.section}>
        <ThemedText type="title">Basic Chips</ThemedText>

        <View style={styles.row}>
          <Chip
            title="Default Chip"
            onPress={() => console.log("Chip pressed")}
          />

          <Chip
            title="Active Chip"
            variant="active"
            onPress={() => console.log("Active chip pressed")}
          />

          <Chip
            title="Disabled"
            disabled
            onPress={() => console.log("This won't fire")}
          />
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="title">Chip Variants</ThemedText>

        <View style={styles.row}>
          <Chip
            title="Default"
            variant="default"
            onPress={() => console.log("Default chip")}
          />

          <Chip
            title="Active"
            variant="active"
            onPress={() => console.log("Active chip")}
          />

          <Chip
            title="Error"
            variant="error"
            onPress={() => console.log("Error chip")}
          />
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="title">Deletable Chips</ThemedText>

        <View style={styles.row}>
          <Chip
            title="Deletable"
            onDelete={() => console.log("Delete pressed")}
            onPress={() => console.log("Chip pressed")}
          />

          <Chip
            title="Deletable Error"
            variant="error"
            onDelete={() => console.log("Delete pressed")}
            onPress={() => console.log("Chip pressed")}
          />
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    padding: 20,
    gap: 16,
  },
  row: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
});
