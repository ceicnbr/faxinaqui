// RegistrationSuccessScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '/Users/DeSouza/Documents/faxinaqui/faxinaq/src/components/screens/HomeScreen';

const RegistrationSuccessScreen = () => {
  const navigation = useNavigation();

  const handleGoToHome = () => {
    // Navegar de volta à tela inicial
    navigation.navigate('Bem vindo'); // Substitua 'Register' pelo nome da sua tela inicial
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('/Users/DeSouza/Documents/faxinaqui/faxinaq/src/components/screens/check.png')} // Substitua pelo caminho da sua imagem
        style={styles.image}
      />
      <Text style={styles.title}>REGISTRO CONCLUIDO!</Text>
      <Text style={styles.message}>Obrigado por se registrar.</Text>

      {/* Botão para voltar à tela inicial */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleGoToHome}
      >
        <Text style={styles.buttonText}>Ir para a tela inicial</Text>
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
  image: {
    width: 100, // ajuste o tamanho conforme necessário
    height: 100, // ajuste o tamanho conforme necessário
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color:'#1F0AA3'
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color:'#1F0AA3',
  },
  button: {
    backgroundColor: '#403DFF',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RegistrationSuccessScreen;
