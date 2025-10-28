import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Button } from '@equinor/design-system-mobile-components';

export default function ButtonsTest() {
  const [pressCount, setPressCount] = useState(0);

  const handlePress = () => {
    setPressCount(prev => prev + 1);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Button Component Test</Text>
        <Text style={styles.counter}>Pressed: {pressCount} times</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Variants</Text>
        
        <View style={styles.group}>
          <Text style={styles.label}>Contained Button</Text>
          <Button 
            variant="contained" 
            title="Contained Button" 
            onPress={handlePress} 
          />
        </View>

        <View style={styles.group}>
          <Text style={styles.label}>Outlined Button</Text>
          <Button 
            variant="outlined" 
            title="Outlined Button" 
            onPress={handlePress} 
          />
        </View>

        <View style={styles.group}>
          <Text style={styles.label}>Ghost Button</Text>
          <Button 
            variant="ghost" 
            title="Ghost Button" 
            onPress={handlePress} 
          />
        </View>

        <View style={styles.group}>
          <Text style={styles.label}>Disabled Button</Text>
          <Button 
            variant="contained" 
            title="Disabled Button" 
            disabled 
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 40,
    marginBottom: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  counter: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
  },
  section: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  group: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
    color: '#666',
  },
});
