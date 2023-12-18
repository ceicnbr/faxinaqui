// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '/Users/DeSouza/Documents/faxinaqui/faxinaq/src/components/screens/RegisterScreen';
import RegistrationSuccessScreen from '/Users/DeSouza/Documents/faxinaqui/faxinaq/src/components/screens/RegistrationSuccessScreen';
import WelcomeScreen from '/Users/DeSouza/Documents/faxinaqui/faxinaq/src/components/screens/WelcomeScreen';
import LoginScreen from '/Users/DeSouza/Documents/faxinaqui/faxinaq/src/components/screens/LoginScreen';
import HomeScreen from './src/components/screens/HomeScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bem vindo" component={WelcomeScreen}  options={{ title: null }} />
        <Stack.Screen name="Login" component={LoginScreen}  options={{ title: null }} />
        <Stack.Screen name="Register" component={RegisterScreen}  options={{ title: null }} />
        <Stack.Screen name="RegistrationSuccess" component={RegistrationSuccessScreen} options={{ title: null }}  />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
