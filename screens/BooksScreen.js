import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Book from '../components/Book';
import { Picker } from '@react-native-picker/picker';

const categoryNames = {
  "": "All categories",
  "67d5b5898bb68546dd0de9a4": "eBooks",
  "67d5b57ea85123519ee321ed": "Audiobooks",
  "67d5b512dc72582cf723c611": "Physical books",
};

const BooksScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.webflow.com/v2/sites/67ae0d90e65a0b625014ef64/products",
          {
            headers: {
              Authorization: "Bearer 84783e2f8a78cf2c496ee8fc37b2ff8c2c4e43e62075b27712c63a8c355afbd8",
            },
          }
        );
        const data = await response.json();

        const mappedProducts = data.items.map((item) => ({
          id: item.product.id,
          title: item.product.fieldData.name,
          author: item.product.fieldData.author,
          price: (item.skus[0]?.fieldData.price.value || 0) / 100,
          image: item.skus[0]?.fieldData["main-image"]?.url || 'default_image_url',
          category: categoryNames[item.product.fieldData.category[0]] || "Unknown",
        }));

        const imagePrefetchPromises = mappedProducts.map((product) =>
          Image.prefetch(product.image)
        );

        await Promise.all(imagePrefetchPromises);

        setProducts(mappedProducts);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "name-asc") return a.title.localeCompare(b.title);
    if (sortOption === "name-desc") return b.title.localeCompare(a.title);
  });

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6D4C41" />
        <Text style={styles.loadingText}>Loading books...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Books</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search books..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={sortOption}
          onValueChange={setSortOption}
          style={styles.picker}
        >
          <Picker.Item label="Price (low - high)" value="price-asc" />
          <Picker.Item label="Price (high - low)" value="price-desc" />
          <Picker.Item label="Name (A - Z)" value="name-asc" />
          <Picker.Item label="Name (Z - A)" value="name-desc" />
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={setSelectedCategory}
          style={styles.picker}
        >
          <Picker.Item label="All categories" value="" />
          {[...new Set(products.map((p) => p.category))].map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
      </View>

      <ScrollView style={styles.cardContainer}>
        <View style={styles.row}>
          {sortedProducts.map((product) => (
            <View key={product.id} style={styles.column}>
              <Book
                title={product.title}
                author={product.author}
                price={product.price}
                image={{ uri: product.image }}
                onPress={() =>
                  navigation.navigate("Details", {
                    title: product.title,
                    subtitle: product.subtitle,
                    price: product.price,
                    image: product.image,
                  })
                }
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
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6D4C41',
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#6D4C41',
    backgroundColor: '#F5E6CA',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    color: '#6D4C41',
  },
  pickerContainer: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#6D4C41',
    backgroundColor: '#F5E6CA',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 45,
    paddingHorizontal: 10,
    color: '#6D4C41',
    fontSize: 16,
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A3B18A',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#6D4C41',
    fontWeight: 'bold',
  },
});


export default BooksScreen;
