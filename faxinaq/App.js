import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Button } from 'react-native';
import Buttone from './src/components/Main/'
import DisplayAnImage from './src/components/imagens'


export default function App() {
  return (
    <View style={styles.container}>
      <DisplayAnImage/>
      <Buttone/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9DC6FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
