import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/LoginScreen';
import SingupScreen from './pages/SignupScreen';
import MainScreen from './pages/MainScreen';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SingupScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;