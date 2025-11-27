import { Button, Dialog } from "@equinor/design-system-mobile-components";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function DialogsScreen() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [withActionsOpen, setWithActionsOpen] = useState(false);
  const [customOpen, setCustomOpen] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.section}>
        <ThemedText type="title">Basic Dialog</ThemedText>

        <Button title="Open Basic Dialog" onPress={() => setBasicOpen(true)} />

        <Dialog isOpen={basicOpen} onScrimPress={() => setBasicOpen(false)}>
          <ThemedText type="title">Basic Dialog</ThemedText>
          <ThemedText>
            This is a simple dialog with just a title and content.
          </ThemedText>
        </Dialog>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="title">Dialog with Actions</ThemedText>

        <Button
          title="Open Dialog with Actions"
          onPress={() => setWithActionsOpen(true)}
        />

        <Dialog
          isOpen={withActionsOpen}
          onScrimPress={() => setWithActionsOpen(false)}
        >
          <ThemedText type="title">Confirm Action</ThemedText>
          <ThemedText>
            Are you sure you want to proceed with this action?
          </ThemedText>
          <View style={styles.dialogActions}>
            <Button
              title="Cancel"
              variant="ghost"
              onPress={() => setWithActionsOpen(false)}
            />
            <Button
              title="Confirm"
              onPress={() => {
                console.log("Confirmed!");
                setWithActionsOpen(false);
              }}
            />
          </View>
        </Dialog>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="title">Custom Dialog</ThemedText>

        <Button
          title="Open Custom Dialog"
          onPress={() => setCustomOpen(true)}
        />

        <Dialog isOpen={customOpen} onScrimPress={() => setCustomOpen(false)}>
          <View style={styles.customContent}>
            <ThemedText type="title">Custom Content</ThemedText>
            <ThemedText type="subtitle">Additional Information</ThemedText>
            <ThemedText>
              You can add any custom React Native components here.
            </ThemedText>
            <Button
              title="Close"
              variant="outlined"
              onPress={() => setCustomOpen(false)}
            />
          </View>
        </Dialog>
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
  customContent: {
    gap: 12,
    padding: 20,
  },
  dialogActions: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "flex-end",
    marginTop: 16,
  },
});
