// App.js
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Book Types</Text>
      <ProductCard 
        imageUrl="https://i.pinimg.com/736x/18/db/e1/18dbe1269281a46f9064eb5efae42dbc.jpg"
        name="Books" 
        description="Explore our curated collection of physical books, from timeless classics to the latest bestsellers. Each title is chosen with care to offer a cozy reading experience, whether you're after fiction, non-fiction, or something in between." 
      />
      <ProductCard 
        imageUrl="https://i.pinimg.com/236x/c2/f4/bc/c2f4bcd170b65cfda59e56456bf67e8f.jpg" 
        name="Audiobooks" 
        description="Relax and unwind with our selection of audiobooks. Perfect for listening while you walk, commute, or simply rest. Discover new stories and old favorites brought to life with rich narration and soundscapes." 
      />
      <ProductCard 
        imageUrl="https://i.pinimg.com/236x/1e/2f/38/1e2f387a54422fe66ec921aafff2954a.jpg" 
        name="eBooks" 
        description="Browse our growing collection of eBooks for easy access to stories on-the-go. Download your next read instantly, whether on your tablet, phone, or eReader—stories are just a click away." 
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#A3B18A',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 25,
    textAlign: 'center',
  },
});

export default App;
