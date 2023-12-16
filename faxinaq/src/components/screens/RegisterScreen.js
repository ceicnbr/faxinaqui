// RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterPress = () => {
    // Lógica para processar o registro do usuário
    // Você pode adicionar a lógica de registro aqui, por exemplo, chamando uma API, etc.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTRO</Text>
      <Text style={styles.paragrafo}>Registre-se para encontrar suas necessidades de faxina e para descobrir todos nossos servicos</Text>
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegisterPress}
      >
        <Text style={styles.buttonText}>Registrar</Text>
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
    marginTop:0,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    color:'#1F0AA3',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: '#9DC6FB',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor:'#fff',
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#403DFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  paragrafo:{
    marginBottom:100,
    marginTop:10,
    color:'#1F0AA3',
  }
});

export default RegisterScreen;
