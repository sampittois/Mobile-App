// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BooksScreen from './screens/BooksScreen';
import AudiobooksScreen from './screens/AudiobooksScreen';
import EbooksScreen from './screens/EbooksScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#F5E6CA' },
          headerTintColor: '#6D4C41',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Books" component={BooksScreen} />
        <Stack.Screen name="Audiobooks" component={AudiobooksScreen} />
        <Stack.Screen name="eBooks" component={EbooksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;