// screens/BooksScreen.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Book from '../components/Book';

const BooksScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Book 
        imageUrl="https://i.pinimg.com/236x/91/86/7b/91867bde9980c0a1184c255ff84d87fd.jpg"
        title="Better Than The Movies" 
        author="Lynn Painter"
        price="€12,95"
        onPress={() => navigation.navigate('Books')}
      />
      <Book 
        imageUrl="https://i.pinimg.com/474x/e7/08/94/e70894aa905f09c4e0b40dc95019995f.jpg"
        title="Powerless" 
        author="Lauren Roberts"
        price="€12,95" 
        onPress={() => navigation.navigate('Books')}
      />
       <Book 
        imageUrl="https://i.pinimg.com/236x/dd/4f/b2/dd4fb256f289918399a59c6c6b0c144f.jpg"
        title="Twisted Love" 
        author="Ana Huang" 
        price="€13,95"
        onPress={() => navigation.navigate('Books')}
      />
            <Book 
        imageUrl="https://i.pinimg.com/236x/f3/d6/eb/f3d6eb4c47a9046eb3172580de8e9b2b.jpg"
        title="Beach Read" 
        author="Emily Henry"
        price="€10,00"
        onPress={() => navigation.navigate('Books')}
      />
      <Book 
        imageUrl="https://i.pinimg.com/236x/82/15/49/821549091be38d31b3030f85dd025d93.jpg"
        title="The Cheat Sheet" 
        author="Sarah Adams" 
        price="€14,00"
        onPress={() => navigation.navigate('Books')}
      />
      <Book 
        imageUrl="https://i.pinimg.com/474x/9a/38/57/9a38579586a70981c288bb1a32e925d5.jpg"
        title="Butcher & Blackbird" 
        author="Brynne Weaver" 
        price="€15,50"
        onPress={() => navigation.navigate('Books')}
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#A3B18A',
  },
});

export default BooksScreen;