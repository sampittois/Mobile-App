// Book.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Book = ({ imageUrl, title, author, price, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.price}>{price}</Text>
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
    flex: 1,
  },
  image: {
    width: '100%', 
    height: undefined, 
    aspectRatio: 3 / 4, 
    borderRadius: 10,
    resizeMode: 'cover', 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#6D4C41',
  },
  author: {
    fontSize: 14,
    color: '#6D4C41',
  },
  price: {
    fontSize: 14,
    color: '#6D4C41',
    fontWeight: 'bold',
  }
});

export default Book;
