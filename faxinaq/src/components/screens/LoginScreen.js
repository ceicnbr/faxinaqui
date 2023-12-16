import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleRegisterPress = () => {
    // Navegar para a tela de registro
    navigation.navigate('Register');
  };

  return (
    <View>
      <Text>Login</Text>
      
      <Button title="Registrar-se" onPress={handleRegisterPress} />
    </View>
  );
};

export default LoginScreen;