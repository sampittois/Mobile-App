// screens/BlogScreen.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TypeBook from '../components/TypeBook';

const BlogScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TypeBook 
        imageUrl="https://i.pinimg.com/236x/af/c7/c7/afc7c7e7af051ddb4538b3fc0847ad7b.jpg"
        name="How to Read More" 
        description="Tips and tricks to build a strong reading habit." 
        onPress={() => {}}
      />
      <TypeBook 
        imageUrl="https://i.pinimg.com/236x/c3/0e/17/c30e1728afe85ca32806ba96ae1c3e97.jpg" 
        name="Audiobooks vs Physical Books" 
        description="Which one is better for you? Find out here." 
        onPress={() => {}}
      />
      <TypeBook 
        imageUrl="https://i.pinimg.com/474x/e5/44/2c/e5442cc1350fc38150996676e9f73ef9.jpg" 
        name="Best Fantasy Books of 2024" 
        description="A curated list of must-read fantasy novels this year." 
        onPress={() => {}}
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

export default BlogScreen;
