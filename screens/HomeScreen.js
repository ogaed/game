import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../src/components/Button';
import { theme } from "../src/core/theme";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Human Body Game!</Text>
      
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Quiz")}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Diagram")}>
          <Text style={styles.buttonText}>View Diagrams</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MiniGame")}>
          <Text style={styles.buttonText}>Play Minigame</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 120,
    borderRadius: 50,
    marginTop: 10,
    marginBottom : 15
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    width: 80,
  },
});