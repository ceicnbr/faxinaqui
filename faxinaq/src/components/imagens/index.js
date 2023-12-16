import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    margin: 0,
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',

  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 290,
    height: 304,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./logo_app.png')}
      />
    </View>
  );
};

export default DisplayAnImage;