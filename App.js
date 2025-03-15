// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BlogScreen from './screens/BlogScreen';
import BooksScreen from './screens/BooksScreen';
import AudiobooksScreen from './screens/AudiobooksScreen';
import EbooksScreen from './screens/EbooksScreen';
import BookDetails from './components/BookDetails';
import AmountScreen from './screens/AmountScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// HomeStack for 'Home' screens
const HomeStack = () => (
  <Stack.Navigator
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
    <Stack.Screen name="Details" component={BookDetails} />
    <Stack.Screen name="Amount" component={AmountScreen} />
  </Stack.Navigator>
);

// BlogStack for Blog screen
const BlogStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#F5E6CA' },
      headerTintColor: '#6D4C41',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
    <Stack.Screen name="Blog" component={BlogScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = route.name === 'HomeTab' ? 'home' : 'book';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6D4C41',
          tabBarInactiveTintColor: '#A3B18A',
          tabBarStyle: { backgroundColor: '#F5E6CA' },
        })}
      >
        <Tab.Screen 
          name="HomeTab"
          component={HomeStack} 
          options={{ headerShown: false }} 
        />
        <Tab.Screen 
          name="Blog" 
          component={BlogStack} 
          options={{ headerShown: false }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
