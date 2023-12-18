// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '/Users/DeSouza/Documents/faxinaqui/faxinaq/src/components/screens/HomeScreen';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    // Lógica para processar o login do usuário
    // Você pode adicionar a lógica de login real aqui
    navigation.navigate("HomeScreen")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLoginPress}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Register')} // Navegar para a tela de registro
      >
        <Text style={styles.linkText}>Ainda não tem uma conta? Crie uma aqui!</Text>
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
  title: {
    fontSize: 35,
    marginBottom: 20,
    color:'#1F0AA3'
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor:'#fff',
    borderColor:'#fff'
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  },
  linkText: {
    marginTop: 40,
    color: '#1F0AA3',
    fontSize: 15,
  },
});

export default LoginScreen;
