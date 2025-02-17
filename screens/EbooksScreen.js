// screens/EbooksScreen.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Book from '../components/Book';

const EbooksScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Book 
        imageUrl="https://i.pinimg.com/474x/45/8e/5e/458e5e95928d889cc7040b3deca56c6a.jpg"
        title="Caraval" 
        author="Stephanie Garber"
        price="€8,00"
        onPress={() => navigation.navigate('Books')}
      />
      <Book 
        imageUrl="https://i.pinimg.com/236x/ee/06/da/ee06da4b1bb681c5b9e9bc03b0d9f7ae.jpg"
        title="A Court Of Thorns And Roses" 
        author="Sarah J. Maas"
        price="€12,95" 
        onPress={() => navigation.navigate('Books')}
      />
       <Book 
        imageUrl="https://i.pinimg.com/236x/1c/51/82/1c5182ab63143b58c3a83cf09cc79d56.jpg"
        title="Storm and Silence"
        author="Robert Thier" 
        price="€13,95"
        onPress={() => navigation.navigate('Books')}
      />
        <Book 
        imageUrl="https://i.pinimg.com/236x/ce/c5/d1/cec5d16df4b2ea892922a45aa9ce9845.jpg"
        title="The Cruel Prince" 
        author="Holly Black"
        price="€10,00"
        onPress={() => navigation.navigate('Books')}
      />
      <Book 
        imageUrl="https://i.pinimg.com/474x/9d/31/3e/9d313e321d634f89637ed43d8aef3834.jpg"
        title="Pride and Prejudice" 
        author="Jane Austen" 
        price="€15,00"
        onPress={() => navigation.navigate('Books')}
      />
      <Book 
        imageUrl="https://i.pinimg.com/236x/44/b4/f5/44b4f5bf3847d12c4bb8dc39d57775bd.jpg"
        title="Fourth Wing" 
        author="Rebecca Yarros" 
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

export default EbooksScreen;