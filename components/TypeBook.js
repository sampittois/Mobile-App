// components/TypeBook.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const TypeBook = ({ imageUrl, name, description, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5E6CA',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#6D4C41'
  },
  description: {
    fontSize: 14,
    color: '#6D4C41',
  },
});

export default TypeBook;
