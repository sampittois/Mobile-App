// screens/AudiobooksScreen.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Book from '../components/Book';

const AudiobooksScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Book 
        imageUrl="https://i.pinimg.com/474x/bf/07/7f/bf077f25b1d90e6f2a3ae0617a4d3d6d.jpg"
        title="Lights Out" 
        author="Navessa Allen"
        price="€8,99"
        onPress={() => navigation.navigate('Books')}
      />
      <Book 
        imageUrl="https://i.pinimg.com/236x/7d/fa/f0/7dfaf091a604cd9bdda8e79b43076d89.jpg"
        title="Losing Neverland" 
        author="Evelyn Montgomery"
        price="€14,99" 
        onPress={() => navigation.navigate('Books')}
      />
       <Book 
        imageUrl="https://i.pinimg.com/236x/b9/27/7e/b9277e75136cbd792514783ea4eb7f91.jpg"
        title="Leather & Lark" 
        author="Brynne Weaver" 
        price="€13,50"
        onPress={() => navigation.navigate('Books')}
      />
        <Book 
        imageUrl="https://i.pinimg.com/236x/a0/9a/7e/a09a7ef089fe3798b02bc65fa1198f09.jpg"
        title="Little Stranger" 
        author="Leigh Rivers"
        price="€10,00"
        onPress={() => navigation.navigate('Books')}
      />
      <Book 
        imageUrl="https://i.pinimg.com/236x/e1/b0/1b/e1b01b64096e1092fcca9bac39a78965.jpg"
        title="Reckless" 
        author="Lauren Roberts" 
        price="€14,00"
        onPress={() => navigation.navigate('Books')}
      />
      <Book 
        imageUrl="https://i.pinimg.com/236x/2f/77/99/2f77995867c0d2d54e29203aaedf5f3c.jpg"
        title="Wildfire" 
        author="Hannah Grace" 
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

export default AudiobooksScreen;