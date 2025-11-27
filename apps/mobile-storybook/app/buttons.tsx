import { Button } from "@equinor/design-system-mobile-components";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function ButtonsScreen() {
  const [togglePressed, setTogglePressed] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.section}>
        <ThemedText type="title">Button Variants</ThemedText>

        <View style={styles.buttonGroup}>
          <Button
            title="Primary Button"
            variant="contained"
            onPress={() => alert("Primary Button pressed")}
          />

          <Button
            title="Secondary Button"
            variant="outlined"
            onPress={() => alert("Secondary Button pressed")}
          />

          <Button
            title="Ghost Button"
            variant="ghost"
            onPress={() => alert("Ghost Button pressed")}
          />

          <Button
            title="Disabled Button"
            variant="contained"
            disabled
            onPress={() => alert("Disabled Button pressed")}
          />
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="title">Icon Buttons</ThemedText>

        <View style={styles.row}>
          <Button.Icon
            name="heart"
            onPress={() => alert("Heart Button pressed")}
          />

          <Button.Icon
            name="star"
            variant="outlined"
            onPress={() => alert("Star Button pressed")}
          />

          <Button.Icon
            name="close"
            variant="ghost"
            onPress={() => alert("Close Button pressed")}
          />

          <Button.Icon
            name="check"
            disabled
            onPress={() => alert("Disabled Check Button pressed")}
          />
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="title">Toggle Button Group</ThemedText>

        <Button.Toggle activeIndex={togglePressed ? 1 : 0}>
          <Button title="Option 1" onPress={() => setTogglePressed(false)} />
          <Button title="Option 2" onPress={() => setTogglePressed(true)} />
        </Button.Toggle>
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
  buttonGroup: {
    gap: 12,
  },
  row: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
});
