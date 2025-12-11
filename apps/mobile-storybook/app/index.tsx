import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.title}>EDS Mobile</Text>
        <Text style={styles.subtitle}>
          Equinor Design System for React Native
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Welcome</Text>
        <Text style={styles.text}>
          This is a component library showcase for the Equinor Design System
          Mobile. Use the drawer menu to explore the different components
          organized by category.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Version 0.1.0 • © 2025 Equinor ASA
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  hero: {
    backgroundColor: "#007079",
    padding: 32,
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#E6F2FF",
    lineHeight: 24,
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
    color: "#000",
  },
  text: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },
  categoryList: {
    marginTop: 8,
  },
  categoryItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  categoryDesc: {
    fontSize: 14,
    color: "#777",
    lineHeight: 20,
  },
  footer: {
    padding: 24,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    marginTop: 16,
  },
  footerText: {
    fontSize: 12,
    color: "#999",
  },
});

