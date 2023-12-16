import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Buttone = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton}>
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
  },
  loginButton: {
    backgroundColor: '#403DFF', 
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
    borderRadius:50,
  },
  registerButton: {
    backgroundColor: '#403DFF', 
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
    borderRadius:50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Buttone;
