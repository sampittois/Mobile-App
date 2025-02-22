import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const BookDetails = ({ route }) => {
  const book = route.params;

  if (!book) {
    return <Text style={styles.errorText}>Book details not found.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.detailsContainer}>
        <Image source={{ uri: book.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>By {book.author}</Text>
        <Text style={styles.price}>{book.price}</Text>
        <Text style={styles.description}>{book.description}</Text>
        <Text style={styles.details}>Publication Date: {book.publicationDate}</Text>
        <Text style={styles.details}>Pages: {book.pages}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#A3B18A',
    alignItems: 'center',
  },
  detailsContainer: {
    backgroundColor: '#F5E6CA',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6D4C41',
  },
  author: {
    fontSize: 18,
    color: '#6D4C41',
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 10,
    color: '#6D4C41',
  },
  details: {
    fontSize: 14,
    color: '#6D4C41',
    marginTop: 5,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default BookDetails;
