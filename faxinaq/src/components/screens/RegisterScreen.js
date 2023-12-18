// RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegistrationSuccessScreen from './RegistrationSuccessScreen';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereço, setEndereço] = useState('');

  const handleRegisterPress = () => {
    // Lógica para processar o registro do usuário
    // Suponha que o registro seja bem-sucedido por enquanto
    // Você pode adicionar a lógica de registro real aqui

    // Navegar para a tela de registro concluído
    navigation.navigate('RegistrationSuccess');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTRO</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        onChangeText={text => setNome(text)}
        value={nome}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        onChangeText={text => setTelefone(text)}
        value={telefone}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        onChangeText={text => setEndereço(text)}
        value={endereço}
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
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RegisterScreen;
