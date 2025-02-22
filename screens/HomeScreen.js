// HomeScreen.js
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import TypeBook from '../components/TypeBook';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TypeBook 
        imageUrl="https://i.pinimg.com/736x/18/db/e1/18dbe1269281a46f9064eb5efae42dbc.jpg"
        name="Books" 
        description="Explore our curated collection of physical books." 
        onPress={() => navigation.navigate('Books')}
      />
      <TypeBook 
        imageUrl="https://i.pinimg.com/236x/c2/f4/bc/c2f4bcd170b65cfda59e56456bf67e8f.jpg" 
        name="Audiobooks" 
        description="Relax and unwind with our selection of audiobooks." 
        onPress={() => navigation.navigate('Audiobooks')}
      />
      <TypeBook 
        imageUrl="https://i.pinimg.com/236x/1e/2f/38/1e2f387a54422fe66ec921aafff2954a.jpg" 
        name="eBooks" 
        description="Browse our growing collection of eBooks." 
        onPress={() => navigation.navigate('eBooks')}
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
    color: '#6D4C41'
  },
});

export default HomeScreen;