import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Book from '../components/Book';

const BooksScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/67ae0d90e65a0b625014ef64/products",
      {
        headers: {
          Authorization: "Bearer 84783e2f8a78cf2c496ee8fc37b2ff8c2c4e43e62075b27712c63a8c355afbd8"
        },
      }
    )
    .then((res) => res.json())
    .then((data) =>
      setProducts(
        data.items.map((item) => ({
          id: item.product.id,
          title: item.product.fieldData.name,
          author: item.product.fieldData.author,
          price: (item.skus[0]?.fieldData.price.value || 0) / 100,
          image: { uri: item.skus[0]?.fieldData["main-image"]?.url || 'default_image_url' },
        }))
      )
    )
    .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Physical Books</Text> */}

      <ScrollView style={styles.cardContainer}>
        <View style={styles.row}>
          {products.map((product) => (
             <View key={product.id} style={styles.column}>
            <Book
              key={product.id}
              title={product.title}
              author={product.author}
              price={product.price}
              image={product.image}
              onPress={() => navigation.navigate("Details", {
                title: product.title,
                subtitle: product.subtitle,
                price: product.price,
                image: product.image,
              })}
            />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#A3B18A',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 0,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6D4C41',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#F5E6CA',
    fontSize: 16,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6D4C41',
    marginBottom: 20,
  },
});

export default BooksScreen;
