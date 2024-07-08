import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const diagrams = [
  { id: 1, title: 'Skeletal System', image: require('../assets/tea.jpeg') },
  { id: 2, title: 'Muscular System', image: require('../assets/user.png') },

];

export default function DiagramScreen() {
  return (
    <View style={styles.container}>
      {diagrams.map((diagram) => (
        <View key={diagram.id} style={styles.diagramContainer}>
          <Text style={styles.title}>{diagram.title}</Text>
          <Image source={diagram.image} style={styles.image} />
        </View>
      ))}
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
  diagramContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
});