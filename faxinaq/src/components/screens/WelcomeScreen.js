// WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DisplayAnImage from 'faxinaq/src/components/imagens/index.js';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    // Navegar para a tela de login
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    // Navegar para a tela de registro
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <DisplayAnImage/>

      <TouchableOpacity
        style={[styles.button, styles.loginButton]}
        onPress={handleLoginPress}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.registerButton]}
        onPress={handleRegisterPress}
      >
        <Text style={styles.buttonText}>Registrar-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DC6FB',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
  },
  loginButton: {
    backgroundColor: '#403DFF', // Cor de fundo para o botão de login
  },
  registerButton: {
    backgroundColor: '#403DFF', // Cor de fundo para o botão de registro
  },
});

export default WelcomeScreen;
