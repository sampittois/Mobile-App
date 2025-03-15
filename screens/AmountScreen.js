import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AmountScreen = ({ route }) => {
  const { book } = route.params; // Get the book object passed from BooksScreen

  // State to keep track of the quantity
  const [quantity, setQuantity] = useState(1);

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease quantity (ensuring it doesn't go below 1)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Calculate the total price
  const totalPrice = (parseFloat(book.price.replace('€', '').replace(',', '.')) * quantity).toFixed(2);

  return (
    <View style={styles.box}>
    <View style={styles.container}>
      <Image source={{ uri: book.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>{book.author}</Text>

      {/* Quantity Controls */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Price Display */}
      <Text style={styles.price}>Price per item: {book.price}</Text>
      <Text style={styles.total}>Total: €{totalPrice}</Text>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => { /* Handle adding to cart */ }}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#A3B18A',
        padding: 15,
        flex: 1,
    },
  container: {
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
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6D4C41',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    color: '#6D4C41',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#6D4C41',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#F5E6CA',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6D4C41',
    marginHorizontal: 10,
  },
  price: {
    fontSize: 16,
    color: '#6D4C41',
    marginVertical: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
  },
  addButton: {
    backgroundColor: '#6D4C41',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#F5E6CA',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AmountScreen;
