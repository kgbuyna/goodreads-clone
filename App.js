// npx expo login
// npx expo start --tunnel

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import NavigationBar from './src/Components/NavigationBar';
import MyBooksScreen from './src/Screens/MyBooksScreen';


export default function App() {
  
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* screenOptions руу хэвлэгдэх tab aa өгөх.  */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}} />
        <Stack.Screen name="MyBooks" component={MyBooksScreen}  options={{headerShown: false}} />
      </Stack.Navigator>


    </NavigationContainer>
  );
}


